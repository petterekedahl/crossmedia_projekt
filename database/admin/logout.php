<?php
session_start();
unset($_SESSION['username']);
unset($_SESSION['isLoggedIn']);
session_destroy();
header("Location: ../../spelapp/pages/login.php");
exit();
?>