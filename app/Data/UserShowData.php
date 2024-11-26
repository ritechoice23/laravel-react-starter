<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class UserShowData extends Data
{
    public function __construct(
        public int $id,
        public string $username,
        public string $email,
        public ?string $email_verified_at,
        public string $name,
        public ?string $profile_photo_url,
        public string $created_at,
        public string $updated_at,
    ) {

    }
}
