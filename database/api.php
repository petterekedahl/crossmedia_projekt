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
require_once("./spelapp.php");

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

  //Vet inte om detta behövs.. Tror inte det.
  // if ($user["clue1"]) {
  //   $user = [
  //     "username" => $user["username"],
  //     "suspects" => $user["suspects"],
  //     "notes" => $user["notes"],
  //     "id" => $user["id"],
  //     "finalGuessId" => $user["finalGuessId"],
  //     "guesses" => $user["guesses"],
  //     "clue1" => $clues["clue1"]["correct"],
  //     "clue2" => $user["clue2"],
  //   ];
  // } else if ($user["clue2"]) {
  //   $user = [
  //     "username" => $user["username"],
  //     "suspects" => $user["suspects"],
  //     "notes" => $user["notes"],
  //     "id" => $user["id"],
  //     "finalGuessId" => $user["finalGuessId"],
  //     "guesses" => $user["guesses"],
  //     "clue1" => $user["clue1"],
  //     "clue2" => $clues["clue2"]["correct"],
  //   ];
  // } else if ($user["clue1"] && $user["clue2"]) {
  //   $user = [
  //     "username" => $user["username"],
  //     "suspects" => $user["suspects"],
  //     "notes" => $user["notes"],
  //     "id" => $user["id"],
  //     "finalGuessId" => $user["finalGuessId"],
  //     "guesses" => $user["guesses"],
  //     "clue1" => $clues["clue1"]["correct"],
  //     "clue2" => $clues["clue2"]["correct"],
  //   ];
  // } else {
    $user = [
      "username" => $user["username"],
      "suspects" => $user["suspects"],
      "notes" => $user["notes"],
      "id" => $user["id"],
      "finalGuessId" => $user["finalGuessId"],
      "guesses" => $user["guesses"],
      "clue1" => $user["clue1"],
      "clue2" => $user["clue2"],
    ];
  // }

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

      if ($payload["action"] == 'guess-suspect') {

        $correctSuspect = 1;
        if ($payload["payload"]["finalGuessId"] == $correctSuspect) {
          $updatedUser = [
            "password" => $database['users'][$i]['password'],
            "email" => $database['users'][$i]['email'],
            "emailRecieve" => $database['users'][$i]["register-email-agree"],
            "TnC" => $database['users'][$i]["register-tnc-agree"],
            "username" => $payload["payload"]["username"],
            "suspects" => $payload["payload"]["suspects"],
            "notes" => $payload["payload"]["notes"],
            "id" => $payload["payload"]["id"],
            "finalGuessId" => true,
            "guesses" => $payload["payload"]["guesses"],
            "clue1" => $payload["payload"]["clue1"],
            "clue2" => $payload["payload"]["clue2"],
          ];
        } else {
          $updatedUser = [
            "password" => $database['users'][$i]['password'],
            "email" => $database['users'][$i]['email'],
            "emailRecieve" => $database['users'][$i]["register-email-agree"],
            "TnC" => $database['users'][$i]["register-tnc-agree"],
            "username" => $payload["payload"]["username"],
            "suspects" => $payload["payload"]["suspects"],
            "notes" => $payload["payload"]["notes"],
            "id" => $payload["payload"]["id"],
            "finalGuessId" => false,
            "guesses" => $payload["payload"]["guesses"],
            "clue1" => $payload["payload"]["clue1"],
            "clue2" => $payload["payload"]["clue2"],
          ];
        }

        $database["users"][$i] = $updatedUser;
      } // end action guess-suspect
      if ($payload['payload']['action'] == 'submit-clue') {
        if ($payload['payload']["clue1"] && $payload['payload']['clue1'] == $clues['clue1']['answer']) {
          $updatedUser = [
            "password" => $database['users'][$i]['password'],
            "email" => $database['users'][$i]['email'],
            "emailRecieve" => $database['users'][$i]["register-email-agree"],
            "TnC" => $database['users'][$i]["register-tnc-agree"],
            "username" => $payload["payload"]["username"],
            "suspects" => $payload["payload"]["suspects"],
            "notes" => $payload["payload"]["notes"],
            "id" => $payload["payload"]["id"],
            "finalGuessId" => false,
            "guesses" => $payload["payload"]["guesses"],
            "clue1" => $clues["clue1"]["correct"],
            "clue2" => $payload["payload"]["clue2"],
          ];
        }

        if ($payload['payload']["clue1"] && $payload['payload']['clue1'] != $clues['clue1']['answer']) {
          $updatedUser = [
            "password" => $database['users'][$i]['password'],
            "email" => $database['users'][$i]['email'],
            "emailRecieve" => $database['users'][$i]["register-email-agree"],
            "TnC" => $database['users'][$i]["register-tnc-agree"],
            "username" => $payload["payload"]["username"],
            "suspects" => $payload["payload"]["suspects"],
            "notes" => $payload["payload"]["notes"],
            "id" => $payload["payload"]["id"],
            "finalGuessId" => false,
            "guesses" => $payload["payload"]["guesses"],
            "clue1" => $clues["clue1"]["incorrect"],
            "clue2" => $payload["payload"]["clue2"],
          ];
        }

        if ($payload['payload']['clue2'] && $payload['payload']['clue2'] == $clues['clue2']['answer']) {
          $updatedUser = [
            "password" => $database['users'][$i]['password'],
            "email" => $database['users'][$i]['email'],
            "emailRecieve" => $database['users'][$i]["register-email-agree"],
            "TnC" => $database['users'][$i]["register-tnc-agree"],
            "username" => $payload["payload"]["username"],
            "suspects" => $payload["payload"]["suspects"],
            "notes" => $payload["payload"]["notes"],
            "id" => $payload["payload"]["id"],
            "finalGuessId" => false,
            "guesses" => $payload["payload"]["guesses"],
            "clue1" => $payload["payload"]["clue1"],
            "clue2" => $clues['clue2']['correct'],
          ];
        }
        if ($payload['payload']["clue2"] && $payload['payload']['clue2'] != $clues['clue2']['answer']) {
          $updatedUser = [
            "password" => $database['users'][$i]['password'],
            "email" => $database['users'][$i]['email'],
            "emailRecieve" => $database['users'][$i]["register-email-agree"],
            "TnC" => $database['users'][$i]["register-tnc-agree"],
            "username" => $payload["payload"]["username"],
            "suspects" => $payload["payload"]["suspects"],
            "notes" => $payload["payload"]["notes"],
            "id" => $payload["payload"]["id"],
            "finalGuessId" => false,
            "guesses" => $payload["payload"]["guesses"],
            "clue1" => $payload["payload"]["clue1"],
            "clue2" => $clues["clue2"]["incorrect"],
          ];
        }
      }
      $jsonDatabase = json_encode($database, JSON_PRETTY_PRINT);
      file_put_contents('./json/database.json', $jsonDatabase);
      //Gets the content in the database again so that the client will be sent an updated version of it's values.
      $database = json_decode(file_get_contents($databaseLink), true);

      $user = [
        "username" => $database["users"][$i]["username"],
        "suspects" => $database["users"][$i]["suspects"],
        "notes" => $database["users"][$i]["notes"],
        "id" => $database["users"][$i]["id"],
        "finalGuessId" => $database["users"][$i]["finalGuessId"],
        "guesses" => $database["users"][$i]["guesses"],
        "clue1" => $database["users"][$i]["clue1"],
        "clue2" => $database["users"][$i]["clue2"],
      ];
    } // end if user id
  }

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
        "id" => $database["users"][$i]["id"],
        "finalGuessId" => $database["users"][$i]["finalGuessId"],
        "guesses" => $database["users"][$i]["guesses"],
        "clue1" => $database["users"][$i]["clue1"],
        "clue2" => $database["users"][$i]["clue2"],
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
        "id" => $database["users"][$i]["id"],
        "finalGuessId" => $user["finalGuessId"],
        "guesses" => $user["guesses"],
        "clue1" => $user["clue1"],
        "clue2" => $user["clue2"],
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