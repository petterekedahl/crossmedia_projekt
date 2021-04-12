<?php
session_start();

require_once "../assets/functions.php";
require_once "../assets/messageFunctions.php";

$method = $_SERVER["REQUEST_METHODS"];

if (!isMethodAlloed($method)) die();

if ($method == "POST") {
  if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $user = validateUser($username, $password);

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

    send(200, "Log in successful");
    exit();
  }
}
?>