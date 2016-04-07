<?php
//具体实现的内容.
include_once("./userfactory.php");
include_once("./productfactory.php");
include_once("./productsettle.php");


$number = 10;  //买书10本
$bookName = "设计模式";  //书名 设计模式
//使用book工厂创建图书实例.
$book = ProductFactory::createProduct("book",$bookName);

//用用户工厂分别创建了三个用户.
$normalUser = UserFactory::createUser("NormalUser","Tom");
$vipUser = UserFactory::createUser("VipUser","Jack");
$innerUser = UserFactory::createUser("Inneruser","Jerry");

//计算结果
echo ProductSettle::getInfo($normalUser,$book,$number);
echo ProductSettle::getInfo($vipUser,$book,$number);
echo ProductSettle::getInfo($innerUser,$book,$number);

//大象放进冰箱里,只需要三步.代码的实现也不过三步.
//实现的过程变的太简单了..  ^_^
?>
