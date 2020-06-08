<?php
include("database.php");
$request = file_get_contents("php://input");
$params = json_decode($request,true);

$id = $params['id'];
$username= $params['username'];
$email = $params['email'];
$password = $params['password'];


$ins = "INSERT INTO users VALUES('$id','$username','$email','$password');";

$res = mysqli_query($db_conn,$ins);

if($res){
	$response = array('status' => 200 ,"message"=>"user created successful");
	echo json_encode($response);
}else{
	$response = array('status' => 400 ,"message"=>"user not created");
	echo json_encode($response);
	exit();
}

?>