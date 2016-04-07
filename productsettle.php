<?php
include_once("user.php");
include_once("product.php");

class ProductSettle{
	
	public static function  finalPrice(User $_user,Product $_product,$number = 1){
		$price = $_user->getDiscount() * $_product->getProductPrice() * $number;
		return $price;
	}
	//买了产品到底多少钱呢?
	public static function getInfo(User $user,$product,$number){
		if($user != null & $product != null){
			$price = ProductSettle::finalPrice($user,$product,$number);
			$str =  "您好，尊敬的用户 " . $user->getName() . " <br>";
			$str .= "您的级别是 ". $user->getGrade() .", <br>";
			$str .= "您的折扣是 " . $user->getDiscount() . "<br>";
			$str .= "购买 $number 本 《 ". $product->getProductName() ;
			$str .=  "》的价格是 $price <br><br>";
			return $str;
		}elseif( null == $user){
			return "用户不存在";
		}else{
			return "产品不存在";
		}		
	}
}
?>
