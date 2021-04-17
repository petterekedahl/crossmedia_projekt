<?php
session_start();
unset($_SESSION['username']);
unset($_SESSION['isLoggedIn']);
unset($_SESSION["userId"]);
session_destroy();
header("Location: ../../spelapp/pages/login.php");
exit();
?>