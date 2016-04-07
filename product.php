<?php
/*与产品相关的类放.*/
Interface Product{ //定义产品接口
	public function getProductName();
	public function getProductPrice();
}

interface Book extends Product { // book是产品的一个分类
	public function getAuthor();
}

class BookOnline implements Book{ // 定义book类.
	private $productName;  // 产品名
	private $productPrice; // 产品价格
	private $author;  //作者
	
	public function __construct($_bookName){
		$this->productName = $_bookName;
		//这里放置相关初始化的代码.
		//与数据库关联的代码.
	}
	
	public function getProductName(){
		return $this->productName;
	}
	
	public function getProductPrice(){
		//这里从数据库读取价格.
		//假设价格是 100元.
		$this->productPrice = 100;
		return $this->productPrice;
	}
	
	public function getAuthor(){
		//从数据库里面取值.
		return $this->author;
	}	
}
?>
