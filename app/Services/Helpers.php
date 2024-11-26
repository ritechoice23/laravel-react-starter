<?php

namespace App\Services;

class Helpers
{
    /**
     * get all hashtags from a string
     * @param  string  $text
     * @return array
     */
    public static function getHashTags(string $text): array
    {
        preg_match_all('/#(\w+)/', $text, $tags);
        return collect($tags[1])->unique()->toArray();
    }


    /**
     * @param  string  $text
     * @return array
     */
    public static function getLinks(string $text): array
    {
        preg_match_all('/\bhttps?:\/\/\S+\b/', $text, $links);
        return collect($links[0])->unique()->toArray();
    }


    /**
     * Summary search for hashtags in a string and replace them with a link
     * @param  string  $text
     * @param  string  $urlPath
     * @return string
     */
    public static function replaceHashTagsWithLink(string $text, string $urlPath = "/home?t="): string
    {
        $tags = self::getHashTags($text);
        foreach ($tags as $tag) {
            $text = str_replace('#'.$tag, '<a class="text-blue-500" href="'.$urlPath.$tag.'">#'.$tag.'</a>', $text);
        }
        return $text;
    }

    /**
     * replace https links with anchor tags
     * @param  string  $text
     * @return string
     */
    public static function replaceLinksWithAnchorTags(string $text): string
    {
        $links = self::getLinks($text);
        foreach ($links as $url) {
            // Create the anchor tag
            $anchorTag = '<a class="text-blue-500" href="'.$url.'" target="_blank">'.$url.'</a>';

            // Replace the URL with the anchor tag in the text
            $text = str_replace($url, $anchorTag, $text);
        }
        return $text;
    }


    /**
     * Summary get all mentions from a string
     * @param  string  $text
     * @return array
     */
    public static function getMentions(string $text): array
    {
        preg_match_all('/@(\w+)/', $text, $mentions);
        return collect($mentions[1])->unique()->toArray();
    }

    /**
     * Summary search for mentions in a string and replace them with a link
     * @param  array  $mentions
     * @param  string  $text
     * @param  string  $urlPath
     * @return string
     */
    public static function replaceMentionsWithLink(array $mentions, string $text, string $urlPath = "/"): string
    {
        foreach ($mentions as $mention) {
            $text = str_replace('@'.$mention, '<a href="'.$urlPath.$mention.'">@'.$mention.'</a>', $text);
        }
        return $text;
    }
}
