<?php

// A new “hacky” phone is launched which has the feature of connecting ,
// to anyWi Fi network from any distance away as long as there aren t - , '
// any obstructions between the hotspot and the phone Given a string . ,
// return howmanyWi Fi hotspots I m able to connect to - ' .
// • The phone is represented as a P .
// • A hotspot is represented as an *.
// • An obstruction is represented as a You cannot access a hotspot #.
// if they are behind one of these obstructions .
// Examples
// 1. nonstopHotspot P ➞ ("* * *") 3
// 2. nonstopHotspot P ➞ ("* * # * # * #") 1
// 3. nonstopHotspot P ➞ ("***# #***") 0

// Notes
// • There will be only one phone .
// • No other characters other than spaces will appear in the tests , , .

$txt1 = "* P * *";
$txt2 = "* * # * P # * #";
$txt3 = "***#P#***";

echo '(' . $txt1 . ') - > ' . getCountOfConnectedWifi($txt1) . '</br>';

echo '(' . $txt2 . ') - > ' . getCountOfConnectedWifi($txt2) . '</br>';

echo '(' . $txt3 . ') - > ' . getCountOfConnectedWifi($txt3) . '</br>';

function getCountOfConnectedWifi(string $text): int
{
    $text_arr = explode('P', $text);

    $left_arr = $text_arr[0];
    $left_chars_arr = str_split(trim($left_arr));
    $left_connection_count = 0;

    $right_arr = $text_arr[1];
    $right_chars_arr = str_split(trim($right_arr));
    $right_connection_count = 0;

    if (sizeof($left_chars_arr) != 0 && $left_chars_arr[sizeof($left_chars_arr) - 1] != '#') {

        for ($i = sizeof($left_chars_arr) - 1; $i >= 0; $i--) {
            if ($left_chars_arr[$i] == '#') {
                break;
            } else if ($left_chars_arr[$i] == '*') {
                $left_connection_count++;
            }
        }

    }

    if (sizeof($right_chars_arr) != 0 && $right_chars_arr[0] != '#') {
        foreach ($right_chars_arr as $c) {
            if ($c == '#') {
                break;
            } else if ($c == '*') {
                $right_connection_count++;
            }
        }
    }

    return $right_connection_count + $left_connection_count;

}
