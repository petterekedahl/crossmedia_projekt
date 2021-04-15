<?php
session_start();

require_once "../assets/functions.php";
require_once "../assets/messageFunctions.php";

$databaseLink = "../json/database.json";
$database = [];

if(file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
};

$method = $_SERVER["REQUEST_METHOD"];

if (!isMethodAllowed($method)) die();

if ($method == "POST") {
  if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $user = validateUser($database, $username, $password);

    if(!$user) {
      errorMessage(401, "Could not find username.");
      exit();
    }

    if(!getHashedPassword($password, $user["password"])) {
      errorMessage(401, "Username and password do not match.");
      exit();
    }

    $_SESSION["isLoggedIn"] = true;
    $_SESSION["username"] = $username;

    header("Location: ../../spelapp/index.php");
    exit();
  }
}
?>