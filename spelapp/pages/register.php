<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M.P.P. -</title>
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/register.css">
  <link rel="icon" href="../images/Seal_of_the_MPP1.png">
</head>
<body>
  <div class="spel-register-div">
    <form id="register-form" action="../../database/admin/register.php" method="POST">
      <input class="input-write" id="register-username" name="username" type="text" placeholder="username" required>
      <input class="input-write" id="register-email" name="email" type="text" placeholder="email" required>
      <input class="input-write" id="register-password" name="password" type="password" placeholder="password" required>
      <!-- <input class="input-write" id="register-password2" type="text" placeholder="Repeat password."> -->
      <div class="register-checkboxes">
        <input type="checkbox" name="register-email-agree">
        <label>Yes, I would like to recieve emails regarding this shit</label>
        <input type="checkbox" name="register-tnc-agree" required>
        <label>Yes, I accept the <a href="./terms-and-conditions.php">Terms and conditions</a></label>
      </div>
      <button type="submit">REGISTER</button>
      <!-- <button id="register-cancel">Cancel</button> -->
    </form>
  </div>
</body>
</html>