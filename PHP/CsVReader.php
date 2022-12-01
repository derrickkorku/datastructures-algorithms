<?php

class CsvReader {
    private $file;

    public function __construct(string $path)
    {
        $this->file = fopen($path, 'r');
    }

    public function getRows(){
        while(!feof($this->file)){
           $row = fgetcsv($this->file, 4096);
           yield $row;
        }

        return;
    }
}