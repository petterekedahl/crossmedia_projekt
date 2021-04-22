<?php

?>

<!doctype>
<html>
    <head>
        <link rel='stylesheet' href='style.css'>
        <link rel='stylesheet' href='includes/css/nav.css'>
        <link rel='stylesheet' href='includes/css/footer.css'>
        <meta charset='utf-8'>
        <title>Njet News</title>
    </head>
    <body>
        <?php include_once("includes/navigation.php");?>
        <div id="placeholder"></div>
        <main id="articleBody">
        </main>
        <?php include_once("includes/footer.php");?>
        <script src="resources.js"></script>
        <script src="newsArticle.js"></script>
        <script>
            let currentArt = <?= $_GET['id']; ?>;
            makeArticlePage(currentArt);
        </script>
        <script src="script.js"></script>
    </body>
</html>