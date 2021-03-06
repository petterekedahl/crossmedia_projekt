<?php
session_start();
if(!isset($_SESSION['username'])) {
  header("Location: ../spelapp/pages/login.php");
};
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M.P.P.</title>
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/navigation.css">
  <link rel="icon" href="images/Seal_of_the_MPP1.png">
</head>
<body>
  <div class="spel-welcome-div"><h2>welcome.</h2></div>
  <main id="main-div">
    <div id="content-div">

    </div>
    <?php
    include_once('./sections/header.php');
    ?>
  </main>
</body>
<script src="js/state.js"></script>
<script>
  STATE.userId = <?php echo $_SESSION["userId"]?>
</script>
<script src="js/navigation.js"></script>
<script src="js/functions.js"></script>
<script src="js/classes.js"></script>
<script src="js/loadpagesFunctions.js"></script>
<script src="js/index.js"></script>
</html>