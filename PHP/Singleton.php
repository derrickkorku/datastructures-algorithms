<?php

class Singleton
{
    public static function getIntance()
    {
        static $instance;

        if (! $instance) {
            $instance = new Singleton();
        }

        return $instance;
    }
}
