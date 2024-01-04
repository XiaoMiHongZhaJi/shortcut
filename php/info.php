<?php
ini_set("display_errors","On");
error_reporting(E_ALL);

echo($_SERVER['HTTP_X_FORWARDED_FOR']);
echo "<hr>";

$filecontent = $_SERVER["HTTP_X_FORWARDED_FOR"] . " | " . date("Y-m-d H:i:s") . "\n";
echo($filecontent);
echo "<hr>";

foreach ($_SERVER as $key => $value)
{
    echo "[" . $key . "][" . $value . "]";
    echo "<br><br>";
}

echo phpinfo();