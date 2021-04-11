<?php
$databaseLink = '../json/usersDatabase';
$database = [];

if(!file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
}

function getHighestId($key) {
  $highestId = 0;

  foreach ($database[$key] as $object) {
    if ($highestId < $object["id"]) {
      $highestId = $object["id"] + 1;
    }
  }
  return $highestId;
}

function hashPassword($password) {
  return password_hash($password, PASSWORD_DEFAULT);
}

function getHashedPassword($password, $hashedPassword) {
  return password_verify($password, $hashedPassword);
}

function updateDatabase($newData) {
  if (!$newData) return false;

  $jsonData = json_encode($newData, JSON_PRETTY_PRINT);
  if(!$jsonData) return false;

  file_put_contents($database, $jsonData);
  return true;
}

function allowedMethods() {
  return ["GET", "POST", "PATCH", "DELETE"];
}

function isUsernameTaken($username) {
  foreach ($database["users"] as $user) {
    if ($username == $user["username"]) {
      return false;
    }
  }
  return true;
}

function isMethodAllowed($method) {
  if (!in_array($method, allowedMethods())) {
    abort(405, "Your method is not allowed");
    return false;
  }
  return true;
}
?>