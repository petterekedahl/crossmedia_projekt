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
                    <div id="newsPlus">
                        <h3>Väder</h3>
                        <h2>Vädret just nu i Malmö, Sverige:</h2>
                    </div>
                    <div id="newestNews">
                        <h3>Mest klickade nyheter</h3>
                    </div>
                </div>
            </div>
        </main>
        <?php include_once("includes/footer.php");?>
        <script src="resources.js"></script>
        <script src="script.js"></script>
        <script src="ajax.js"></script>
    </body>
</html>

