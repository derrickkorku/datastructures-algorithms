<?php

function reverseNumberMethod1($num){
    $strNum = (string)$num;
    $rvsNum = strrev($strNum);
    return (int)$rvsNum;
}

function reverseNumberMethod2($num){
    $revNum = 0;

    while ($num > 1){
        $revNum = ($revNum * 10) + ($num % 10);
        $num = $num / 10;
    }
}