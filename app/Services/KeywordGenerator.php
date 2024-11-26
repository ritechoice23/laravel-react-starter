<?php

namespace App\Services;

use RuntimeException;

class KeywordGenerator
{
    private string $content;
    private array $stopWords = [];
    private array $priorityKeywords = [];
    private array $synonymGroups = [];

    private $cachedPriorityKeywords = null;
    private $cachedFilteredWords = null;
    private $cachedSynonymKeywords = null;
    private bool $hasGenerated = false;
    private bool $withScore = false;
    private $keywords;

    /**
     * KeywordGenerator constructor.
     *
     * @param string $content The content to generate keywords from.
     */
    private function __construct(string $content)
    {
        $this->content = $content;
        $this->stopWords = $this->getStopWords();
        $this->priorityKeywords = $this->getPriorityKeywords();
        $this->synonymGroups = $this->getSynonymGroups();
        $this->generateKeywords();
    }

    /**
     * Create a new instance of KeywordGenerator.
     *
     * @param string $content The content to analyze.
     * @return self
     */
    public static function make(string $content): self
    {
        return new self($content);
    }

    /**
     * Add additional stop words to the generator.
     *
     * @param array $stopWords An array of stop words to add.
     * @return self
     * @throws RuntimeException If get() has already been called.
     */
    public function addStopWords(array $stopWords): self
    {
        $this->ensureNotGenerated();
        $this->stopWords = array_merge($this->stopWords, $stopWords);
        return $this;
    }

    /**
     * Add additional priority keywords.
     *
     * @param array $priorityKeywords An array of priority keywords to add.
     * @return self
     * @throws RuntimeException If get() has already been called.
     */
    public function addPriorityKeywords(array $priorityKeywords): self
    {
        $this->ensureNotGenerated();
        $this->priorityKeywords = array_merge($this->priorityKeywords, $priorityKeywords);
        return $this;
    }

    /**
     * Add additional synonym groups.
     *
     * @param array $synonyms An associative array of synonyms.
     * @return self
     * @throws RuntimeException If get() has already been called.
     */
    public function addSynonymGroups(array $synonyms): self
    {
        $this->ensureNotGenerated();
        $this->synonymGroups = array_merge($this->synonymGroups, $synonyms);
        return $this;
    }

    /**
     * Get the generated keywords.
     *
     * @return array An array of generated keywords.
     */
    public function get(): array
    {
        $this->hasGenerated = true; // Mark as generated
        if ($this->withScore) {
            return $this->keywords;
        }
        return collect($this->keywords)->map(function ($item) {
            return $item['keyword'];
        })->toArray();
    }

    public function withScore(): static
    {
        $this->withScore = true;
        return $this;
    }


    /**
     * Sort the keywords by score.
     *
     * @param string $order The order to sort by ('asc' or 'desc').
     * @return self
     */
    public function sortWithScore(string $order = 'asc'): self
    {

        if ($order === 'asc') {
            $this->keywords = collect($this->keywords)->sortByDesc('score')->toArray();
        }

        if ($order === 'desc') {
            $this->keywords = collect($this->keywords)->sortBy('score')->toArray();
        }
        return $this;
    }


    /**
     * Generate keywords based on the content and settings.
     *
     * @return void An array of unique keywords.
     */
    private function generateKeywords(): void
    {
        if ($this->cachedPriorityKeywords === null) {
            $this->cachedPriorityKeywords = $this->extractPriorityKeywords();
        }

        if ($this->cachedFilteredWords === null) {
            $remainingContent = $this->removePriorityKeywords($this->content);
            $this->cachedFilteredWords = $this->filterContent($remainingContent);
        }

        if ($this->cachedSynonymKeywords === null) {
            $this->cachedSynonymKeywords = $this->handleSynonyms($this->cachedFilteredWords);
        }

        $wordCounts = array_count_values($this->filterContent($this->content));

        $gottenKeywords = array_unique(array_merge(
            $this->cachedPriorityKeywords,
            $this->cachedSynonymKeywords,
            $this->addTopWords($this->cachedFilteredWords)
        ));

        foreach ($gottenKeywords as $keyword) {
            $score = $wordCounts[$keyword] ?? 0;
            if ($score > 3) {
                $this->keywords[] = [
                    'keyword' => $keyword,
                    'score' => $wordCounts[$keyword] ?? 0,
                ];
            }
        }
    }


    /**
     * Extract priority keywords from the content.
     *
     * @return array An array of extracted priority keywords.
     */
    private function extractPriorityKeywords(): array
    {
        $keywords = [];
        foreach ($this->priorityKeywords as $keyword) {
            if (stripos($this->content, $keyword) !== false) {
                $keywords[] = str_replace(' ', '', strtolower($keyword));
            }
        }
        return $keywords;
    }

    /**
     * Remove priority keywords from the content.
     *
     * @param string $content The content to process.
     * @return string The content without priority keywords.
     */
    private function removePriorityKeywords($content): string
    {
        return str_ireplace($this->priorityKeywords, '', $content);
    }

    /**
     * Filter the content to extract relevant words.
     *
     * @param string $content The content to filter.
     * @return array An array of filtered words.
     */
    private function filterContent($content): array
    {
        $contentLower = strtolower($content);
        // Split content by whitespace and punctuation, preserving phrases
        $wordsAndPhrases = preg_split('/[\s,.;:!?()]+/', $contentLower);

        return array_filter($wordsAndPhrases, function ($item) {
            // Check if the item is longer than 2 characters and not a stop word
            return (strlen($item) > 2 && !in_array($item, $this->stopWords));
        });
    }

    /**
     * Handle synonyms by replacing them with their corresponding groups.
     *
     * @param array $filteredWords An array of filtered words.
     * @return array An array of keywords derived from synonyms.
     */
    private function handleSynonyms(array $filteredWords): array
    {
        $keywords = [];
        $wordCounts = array_count_values($filteredWords);

        foreach ($this->synonymGroups as $word => $synonym) {
            if (isset($wordCounts[$word])) {
                $keywords[] = strtolower($synonym);
                unset($wordCounts[$word]);
            }
        }

        return $keywords;
    }

    /**
     * Add top words based on their frequency.
     *
     * @param array $filteredWords An array of filtered words.
     * @return array An array of the top words.
     */
    private function addTopWords(array $filteredWords): array
    {
        $keywords = [];
        $wordCounts = array_count_values($filteredWords);
        arsort($wordCounts);

        $topWords = array_slice(array_keys($wordCounts), 0, 5);
        foreach ($topWords as $word) {
            $keywords[] = strtolower($word);
        }

        return $keywords;
    }


    /**
     * Get the default stop words.
     *
     * @return array An array of default stop words.
     */
    private function getStopWords(): array
    {
        return [
            'the', 'and', 'of', 'to', 'in', 'that', 'with', 'on', 'it', 'for', 'as',
            'this', 'was', 'is', 'by', 'at', 'from', 'which', 'an', 'or', 'a', 'be',
            'has', 'but', 'not', 'he', 'she', 'they', 'we', 'you', 'are', 'his',
            'her', 'its', 'him', 'their', 'have', 'had', 'will', 'would', 'can',
            'just', 'more', 'up', 'been', 'if', 'about', 'like', 'other', 'who',
            'when', 'over', 'where', 'after'
        ];
    }

    /**
     * Get the default priority keywords.
     *
     * @return array An array of default priority keywords.
     */
    private function getPriorityKeywords(): array
    {
        return [
            'devotional', 'faith', 'prayer', 'bible', 'worship', 'church',
            'evangelism', 'gospel', 'believer', 'spiritual',
            'holy spirit', 'new testament', 'old testament', 'the great commission',
            'the lord\'s prayer', 'fruit of the spirit'
        ];
    }

    /**
     * Get the default synonym groups.
     *
     * @return array An associative array of default synonyms.
     */
    private function getSynonymGroups(): array
    {
        return [
            'christian' => 'christianity',
            'devotional' => 'devotion',
            'faith' => 'belief',
            'prayer' => 'petition',
            'bible' => 'scripture',
            'worship' => 'adoration',
            'church' => 'congregation',
            'evangelism' => 'witnessing',
//            'gospel' => 'good news',
            'believer' => 'follower'
        ];
    }

    /**
     * Ensure that the generator has not already processed the content.
     *
     * @throws RuntimeException If get() has already been called.
     */
    private function ensureNotGenerated(): void
    {
        if ($this->hasGenerated) {
            throw new RuntimeException("Cannot modify parameters after keywords have been generated.");
        }
    }
}
