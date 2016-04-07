<?php
// 产品工厂
require_once("product.php");

abstract class ProductFactory{
	public static function createProduct($_type,$_name){
		if("book" == $_type){
			return new BookOnline($_name);
		}else{
		    return null;
		}
	}
}

?>
