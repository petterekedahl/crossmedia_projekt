<?php
session_start();
$databaseLink = '/json/database.json';
$database = [];

$loginUrlIndexGame = "../../spelapp/index.php";

require_once("../assets/functions.php");
require_once("../assets/messageFunctions.php");
require_once("../assets/defaultData.php");

if(file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
}

$method = $_SERVER["REQUEST_METHOD"];

if (!isMethodAllowed($method)) die();

if ($method == "GET" && isset($_GET["userId"])) {
  $userId = $_GET["userId"];
  $user = getUser($database, $userId);

  if (!$user) {
    errorMessagePhp(406, "$loginUrlIndexGame?error=100");
  }

  
}

?>