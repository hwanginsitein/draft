<?php
echo __FILE__;exit;
if(empty($_POST)){
    $_POST = $_SERVER;
}
echo json_encode($_POST);