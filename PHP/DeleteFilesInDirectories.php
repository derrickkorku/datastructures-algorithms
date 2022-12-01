<?php


function recurse_delete(string $path): int
{
    $count = 0;

    $dir = rtrim($path, "/\\") . "/";

    $list = dir($dir);

    while (($file = $list->read()) !== false) {
        if ($file === "." || $file === "..") {
            continue;
        }

        if (is_file($dir. $file)) {
            unlink($dir . $file);
            $count++;
        } elseif (is_dir($dir. $file)) {
            $count += recurse_delete($dir. $file);
        }
    }

    rmdir($dir);
    return $count;
}
