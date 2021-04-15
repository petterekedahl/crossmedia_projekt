<?php
session_destroy();
unset($_SESSION['username']);
unset($_SESSION['isLoggedIn']);
exit();
?>