<?php

?>

<!doctype>
<html>
    <head>
        <link rel='stylesheet' href='style.css'>
        <link rel='stylesheet' href='includes/css/nav.css'>
        <link rel='stylesheet' href='includes/css/footer.css'>
        <!-- <meta name="viewport" content="width=580"> -->
        <meta name="viewport" content="width=device-width, initial-scale=0.7">
        <!-- <meta name="viewport" content="width=800"> -->
        <meta charset='utf-8'>
        <title>Sydnyheter</title>
    </head>
    <body>
        <div class="page-wrapper">
            <?php include_once("includes/navigation.php");?>
            <div id="placeholder"></div>
            <main id="articleBody">
                <div id="newsFeed" class="articleNewsFeed"></div>
                <div id="sideBar">
                    <?php include_once("includes/sideBar.php");?>
                </div>
            </main>
            <?php include_once("includes/footer.php");?>
        </div>
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
