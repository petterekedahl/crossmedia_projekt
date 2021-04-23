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

// Checks if request method is okay
if (!isMethodAllowed($method)) die();

// Makes a copy of the database before any changes are made
if ($method != 'GET') {
  $jsonDatabaseCopy = json_encode($database, JSON_PRETTY_PRINT);
  file_put_contents('./json/databaseCopy.json', $jsonDatabaseCopy);
}

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
  $payload = json_decode(file_get_contents('php://input'), true);
  $databaseLength = count($database["users"]);

  for($i = 0; $i < $databaseLength; $i++) {
    if ($database["users"][$i]["id"] == $payload["userId"]) {
      if ($payload["action"] == 'save your notes') {
        $updatedNote = [
          "date" => $payload['payload']['date'],
          "id" => $payload['payload']['id'],
          "notes" => $payload['payload']['notes'],
          "title" => $payload['payload']['title']
        ];

        $userNotesLength = count($database["users"][$i]["notes"]);
        for ($j = 0; $j < $userNotesLength; $j++) {
          if ($database["users"][$i]["notes"][$j]["id"] == $payload["payload"]["id"]) {
            $database["users"][$i]["notes"][$j] = $updatedNote;
          }
        } // end for loop
      } // end if payload action save notes
      if ($payload["action"] == 'suspect change') {
        $updatedSuspect = [
          "name" => $payload["payload"]['name'],
          "height" => $payload["payload"]['height'],
          "alibi" => $payload["payload"]['alibi'],
          "nationality" => $payload["payload"]['nationality'],
          "notes" => $payload["payload"]['notes'],
          "image" => $payload["payload"]['image'],
          "isStillSuspect" => $payload["payload"]['isStillSuspect'],
          "id" => $payload["payload"]['id'],
          "age" => $payload["payload"]['age']
        ];

        $userSuspectsLength = count($database["users"][$i]["suspects"]);
        for ($j = 0; $j < $userSuspectsLength; $j++) {
          if ($database["users"][$i]["suspects"][$j]["id"] == $payload["payload"]['id']) {
            $database["users"][$i]["suspects"][$j] = $updatedSuspect;
          }
        }
      } // end payload action suspect change
      $user = [
        "username" => $database["users"][$i]["username"],
        "suspects" => $database["users"][$i]["suspects"],
        "notes" => $database["users"][$i]["notes"],
        "id" => $database["users"][$i]["id"]
      ];
    } // end if user id
  }

  $jsonDatabase = json_encode($database, JSON_PRETTY_PRINT);
  file_put_contents('./json/database.json', $jsonDatabase);
  http_response_code(200);
  header("Content-Type: application/json");
  echo json_encode($user);
  exit();
}

if ($method == 'POST') {
  $payload = json_decode(file_get_contents('php://input'), true);

  $databaseLength = count($database["users"]);

  for($i = 0; $i < $databaseLength; $i++) {
    if ($database["users"][$i]["id"] == $payload["userId"]) {
      if ($payload["action"] == 'add note') {
        $newNote = [
          "date" => $payload['payload']['date'],
          "id" => $payload['payload']['id'],
          "notes" => $payload['payload']['notes'],
          "title" => $payload['payload']['title']
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

if ($method == 'DELETE') {
  $payload = json_decode(file_get_contents('php://input'), true);
  $databaseLength = count($database["users"]);

  for($i = 0; $i < $databaseLength; $i++) {
    if ($database["users"][$i]["id"] == $payload["userId"]) {
      if ($payload["action"] == 'delete note') {
  
        $userNotesLength = count($database["users"][$i]["notes"]);
        for ($j = 0; $j < $userNotesLength; $j++) {
          if ($database["users"][$i]["notes"][$j]["id"] == $payload["payload"]["id"]) {
              array_splice($database["users"][$i]["notes"], $j, 1);
          }
        } // end for loop
      } // end if payload action delete note
        
      $user = [
        "username" => $database["users"][$i]["username"],
        "suspects" => $database["users"][$i]["suspects"],
        "notes" => $database["users"][$i]["notes"],
        "id" => $database["users"][$i]["id"]
      ];
    } // end if user id
  }
  
  $jsonDatabase = json_encode($database, JSON_PRETTY_PRINT);
  file_put_contents('./json/database.json', $jsonDatabase);
  http_response_code(200);
  header("Content-Type: application/json");
  echo json_encode($user);
  exit();
  
}

?>