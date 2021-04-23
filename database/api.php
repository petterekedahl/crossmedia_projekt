<?php
session_start();
$databaseLink = './json/database.json';
$database = [];

if(file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
}

$loginUrlIndexGame = "../../spelapp/index.php";

require_once("./assets/functions.php");
require_once("./assets/messageFunctions.php");

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

if ($method == 'PUT') {
  $input = file_get_contents('php://input');
  var_dump($input);
}

if ($method == 'POST') {
  $input = json_decode(file_get_contents('php://input'), true);

  $databaseLength = count($database["users"]);

  for($i = 0; $i < $databaseLength; $i++) {
    if ($database["users"][$i]["id"] == $input["userId"]) {
      if ($input["action"] == 'add note') {
        $newNote = [
          "date" => $input['payload']['date'],
          "id" => $input['payload']['id'],
          "notes" => $input['payload']['notes'],
          "title" => $input['payload']['title']
        ];

        array_push($database["users"][$i]["notes"], $newNote);
      }
      $user = [
        "username" => $database["users"][$i]["username"],
        "suspects" => $database["users"][$i]["suspects"],
        "notes" => $database["users"][$i]["notes"],
        "id" => $database["users"][$i]["id"]
      ];
    }
  }

  $jsonDatabase = json_encode($database, JSON_PRETTY_PRINT);
  file_put_contents('./json/database.json', $jsonDatabase);
  http_response_code(200);
  header("Content-Type: application/json");
  echo json_encode($user);
  exit();
}

?>