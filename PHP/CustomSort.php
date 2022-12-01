<?php

class Comaparator {

    private string $key;

    public function __construct(string $key){
        $this->key = $key;
    }

    public function __invoke(mixed $a, mixed $b): int
    {
        return $a[$this->key] <=> $b[$this->key];
    }
}