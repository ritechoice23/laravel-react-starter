<?php

namespace App\Http\Middleware;

use App\Data\UserShowData;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'config' => [
                'app' => [
                    'name' => config('app.name'),
                    'description' => config('app.description'),
                    'keyword' => config('app.keyword')
                ]
            ],
            'auth' => [
                'user' => $request->user() ? UserShowData::from($request->user()) : null,
            ],
        ];
    }
}
