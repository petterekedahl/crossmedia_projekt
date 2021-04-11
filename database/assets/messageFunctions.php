<?php
$databaseLink = '../database';
$database = [];

if(!file_exists($databaseLink)) {
  $database = json_decode(file_get_contents($databaseLink), true);
}

function errorMessage($statusCode = 400, $error = "Bad request") {
  http_response_code($statusCode);
  header("Content-Type: Application/json");
  echo json_encode(["error" => $error]);
  exit();
}

function send($statusCode = 200, $message = "Success") {
  http_response_code($statusCode);
  header("Content-Type: Application/json");
  echo json_encode([ "data" => $message ]);
  exit();
}
?>