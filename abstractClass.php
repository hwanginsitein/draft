<?php
abstract class abstractClass {
    public $a;
    public function a1(){
        echo 1;
    }
    abstract function abs1();
}

class demo1 extends abstractClass{
    public function a1(){
        parent::a1();
    }
    function abs1(){
        
    }
}
/*
class demo2 extends demo1{
    private function abs1() {
        echo __LINE__;
    }
}
 */
$demo1 = new demo1();
$demo1->a1();
//$demo2 = new demo2();
//$demo2->abs1();