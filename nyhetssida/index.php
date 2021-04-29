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
        <main>
            <div id="newsContainer">
                <div id="newsFeed">
                    <div id="senasteNytt"></div>
                    <div id="news"></div>
                </div>
                <div id="sideBar">
                    <?php include_once("includes/sideBar.php");?>
                </div>
            </div>
        </main>
        <?php include_once("includes/footer.php");?>
        <script src="resources.js"></script>
        <script src="script.js"></script>
        <script src="ajax.js"></script>
    </body>
</html>

