<?php
session_start();
if(isset($_SESSION['username'])) {
  header("Location: ../index.php");
};
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M.P.P. -</title>
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/login.css">
</head>
<body>
  <div class="spel-login-div">
    <form id="login-form" action="../../database/admin/login.php" method="POST">
      <input class="input-write" id="login-username" name="username" type="text" placeholder="username" required>
      <input class="input-write" id="login-password" name="password" type="password" placeholder="password" required>
      <div id="login-buttons">
        <button><a href="./register.php">REGISTER</a></button>
        <button id="login-button" type="submit">LOGIN</button>
      </div>
    </form>
  </div>
</body>
<script src="../js/login.js"></script>
</html>