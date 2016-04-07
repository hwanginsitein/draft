<?php
//error_reporting(0);
//echo json_encode($_SERVER);exit;
$a = 1;
$b = function() use($a){
    //global $a;
    return $a++;
};
echo $b()."\n";