<?php
require_once("user.php");
//用户工厂,注意用法.
abstract class UserFactory{
	static function createUser($_grade,$_name){
		if("NormalUser" == $_grade ){
			return new NormalUser($_name);
		}elseif ("VipUser" == $_grade){
			return new VipUser($_name);
		}elseif ("Inneruser" == $_grade){
			return new InnerUser($_name);
		}else{
			echo "some exception";
			return null;
		}
	}
}

?>
