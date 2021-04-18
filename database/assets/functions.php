<?php
session_start();

function getHighestId($database, $key) {
  $highestId = 0;

  foreach ($database[$key] as $object) {
    if ($highestId <= $object["id"]) {
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

function validateUser($database, $username, $password) {
  foreach ($database["users"] as $user) {
    if ($username == $user["username"]) {
        return $user;
    }
  }
  return false;
}

function updateDatabase($newData) {
  if (!$newData) return false;

  $jsonData = json_encode($newData, JSON_PRETTY_PRINT);
  if(!$jsonData) return false;

  file_put_contents('../json/database.json', $jsonData);
  return true;
}

function isUsernameTaken($database, $username) {
  foreach ($database["users"] as $user) {
    if ($username == $user["username"]) {
      return false;
    }
  }
  return true;
}

function isEmailTaken($database, $email) {
  foreach ($database["users"] as $user) {
    if ($email == $user["email"]) {
      return false;
    }
  }
  return true;
}

function isMethodAllowed($method) {
  if (!in_array($method, ["GET", "POST", "PATCH", "DELETE"])) {
    errorMessage(405, "?error=405");
    return false;
  }
  return true;
}

function getUser($database, $userId) {
  foreach ($database["users"] as $user) {
    if ($userId == $user["id"]) {
      return $user;
    }
  }
  return false;
}
?>