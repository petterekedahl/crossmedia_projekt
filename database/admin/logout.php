<?php
session_destroy();
unset($_SESSION['username']);
unset($_SESSION['isLoggedIn']);
header("Location: ../../spelapp/pages/login.php");
exit();
?>