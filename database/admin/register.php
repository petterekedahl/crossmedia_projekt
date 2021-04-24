<?php
session_start();
$databaseLink = '../json/database.json';
$database = [];

$loginUrlReg = "../../spelapp/pages/register.php";

require_once("../assets/functions.php");
require_once("../assets/messageFunctions.php");
require_once("../assets/defaultData.php");

if(file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
}

$method = $_SERVER["REQUEST_METHOD"];

if (!isMethodAllowed($method)) die();

if(isset($_POST["username"]) && isset($_POST['email']) && isset($_POST["password"]) && isset($_POST["register-tnc-agree"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $email = $_POST['email'];
  
  if (!isUsernameTaken($database, $username)) {
    errorMessagePhp(401, $loginUrlReg + "error=0");
    exit();
  }

  if(!isEmailTaken($database, $email)) {
    errorMessagePhp(401, $loginUrlReg + "error=1");
    exit();
  }

  $password = hashPassword($password);

  $id = getHighestId($database, "users");

  $newUser = [
    "id" => $id,
    "username" => $username,
    "password" => $password,
    "email" => $email,
    "emailRecieve" => $_POST["register-email-agree"],
    "TnC" => $_POST["register-tnc-agree"],
    "suspects" => $defaultSuspects,
    "notes" => []
  ];

  $database["users"][] = $newUser;

  updateDatabase($database);
  header("Location: ../../spelapp/index.php");
  exit();
}
?>
