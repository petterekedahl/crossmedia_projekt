<?php
function errorMessagePhp($statusCode = 400, $error = "Bad request") {
  http_response_code($statusCode);
  header("Location: $error");
  exit();
}

function sendPhp($statusCode = 200, $message = "Success") {
  http_response_code($statusCode);
  header("Location: $message");
  exit();
}

function errorMessageJS($statusCode = 400, $error = "Bad request") {
  http_response_code($statusCode);
  header("Content-Type: Application/json");
  echo json_encode(["error" => [$message]]);
  exit();
}

function sendJS($stateCode = 200, $message = "Success") {
  http_response_code($statusCode);
  header("Content-Type: Application/json");
  echo json_encode(["data" => [$message]]);
  exit();
}
?>