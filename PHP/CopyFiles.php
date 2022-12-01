<?php

function recurse_copy(string $src, string $dest): int
{
    $count = 0;

    $src = rtrim($src, "/\\") . "/";
    $dest = rtrim($dest, "/\\") . "/";

    @mkdir($dest);

    $list = dir($src);

    while( ($file = $list->read()) !== false ) {
        if ($file === "." | $file === ".."){
            continue;
        }

        if (is_file($src . $file)) {
            copy($src . $file, $dest . $file);
            $count++;
        } else if (is_dir($src . $file)){
            $count += recurse_copy($src. $file, $dest. $file);
        }
    }


    return $count;
}
