<?php
session_start();

require_once "../assets/functions.php";
require_once "../assets/messageFunctions.php";

$databaseLink = "../json/database.json";
$database = [];

$loginUrlGame = "../../spelapp/pages/login.php";

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
      errorMessagePhp(401, $loginUrlGame + "?error=0");
      exit();
    }

    if(!getHashedPassword($password, $user["password"])) {
      errorMessagePhp(401, $loginUrlGame + "?error=1");
      exit();
    }

    $userId = $user["id"];

    $_SESSION["isLoggedIn"] = true;
    $_SESSION["username"] = $username;
    $_SESSION["userId"] = $user["id"];

    header("Location: ../../spelapp/index.php?user=$userId");
    exit();
  }
}
?>