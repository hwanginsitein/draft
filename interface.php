<?php
/*
 * 定义了 User接口.
 * 和子类 NormalUser,VipUser,InnerUser 
 */
//User接口,定义了三个抽象方法.

interface User{
    public function getName();
    public function setName($_name);
    public function getDiscount();
    public function getGrade();
}
abstract class AbstractUser{
    private $name = ""; //名字
    protected $discount = 0; //折扣
    protected $grade = "";  //级别
    abstract function a();
    public function __construct($_name) {
        $this->setName($_name);
    }
    public function getName() {
        return $this->name;
    }
    public function setName($_name) {
        $this->name = $_name;
    }
    public function getDiscount() {
        return $this->discount;
    }
    public function getGrade() {
        return $this->grade;
    }
}
class NormalUser extends AbstractUser {
    public function a(){
        
    }
    protected $discount = 1.0;
    protected $grade = "NormalUser";
}

class VipUser extends AbstractUser {
    public function a(){
        
    }
    protected $discount = 0.8;
    protected $grade = "VipUser";
}

class InnerUser extends AbstractUser {
    public function a(){
        
    }
    protected $discount = 0.7;
    protected $grade = "InnerUser";
}
