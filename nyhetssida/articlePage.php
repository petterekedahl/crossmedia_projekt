<?php

?>

<!doctype>
<html>
    <head>
        <link rel='stylesheet' href='style.css'>
        <link rel='stylesheet' href='includes/css/nav.css'>
        <link rel='stylesheet' href='includes/css/footer.css'>
        <meta charset='utf-8'>
        <meta name="viewport" content="width=580">
        <title>Sydnyheter</title>
    </head>
    <body>
        <?php include_once("includes/navigation.php");?>
        <div id="placeholder"></div>
        <main id="articleBody">
            <div id="newsFeed" class="articleNewsFeed"></div>
            <div id="sideBar">
                <?php include_once("includes/sideBar.php");?>
            </div>
        </main>
        <?php include_once("includes/footer.php");?>
        <script src="resources.js"></script>
        <script src="newsArticle.js"></script>
        <script>
            let currentArt = <?= $_GET['id']; ?>;
            makeArticlePage(currentArt);
        </script>
        <script src="script.js"></script>
        <script src="ajax.js"></script>
    </body>
</html>
