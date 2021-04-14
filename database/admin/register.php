<?php
session_start();
$databaseLink = '../json/database.json';
$database = [];

require_once("../assets/functions.php");
require_once("../assets/messageFunctions.php");

if(file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
}

$method = $_SERVER["REQUEST_METHOD"];

if (!isMethodAllowed($method)) die();

if(isset($_POST["username"]) && isset($_POST['email']) && isset($_POST["password"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $email = $_POST['email'];
  
  if (!isUsernameTaken($username)) {
    errorMessage(401, "Username taken");
    exit();
  }

  if(!isEmailTaken($email)) {
    errorMessage(401, "Email is already in use");
    exit();
  }

  $password = hashPassword($password);

  $id = getHighestId("user");

  $newUser = [
    "id" => $id,
    "username" => $username,
    "password" => $password,
    "email" => $email
  ];

  $database["users"][] = $newUser;

  updateDatabase($database);
  send(200, "User registered");
  exit();
}
?>
