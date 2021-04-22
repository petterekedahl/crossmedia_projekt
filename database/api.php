<?php
session_start();
$databaseLink = './json/database.json';
$database = [];

if(file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
}

$loginUrlIndexGame = "../../spelapp/index.php";

require_once "./assets/functions.php";
require_once "./assets/messageFunctions.php";

$method = $_SERVER["REQUEST_METHOD"];

if (!isMethodAllowed($method)) die();

if ($method == "GET" && isset($_GET["userId"])) {
  $userId = $_GET["userId"];
  $user = getUser($database, $userId);

  if (!$user) {
    errorMessagePhp(406, "$loginUrlIndexGame?error=100");
  }

  $user = [
    "username" => $user["username"],
    "suspects" => $user["suspects"],
    "notes" => $user["notes"],
    "id" => $user["id"]
  ];

  http_response_code(200);
  header("Content-Type: application/json");
  echo json_encode($user);
  exit();
}

?>