<?php

namespace App\Data;

use Spatie\LaravelData\Data;

/** @typescript */
class PolicyData extends Data
{
    public function __construct(
        public bool $delete = false,
        public bool $edit = false,
        public bool $update = false,
        public bool $create = false,
        public bool $view = false,
    ) {

    }
}
