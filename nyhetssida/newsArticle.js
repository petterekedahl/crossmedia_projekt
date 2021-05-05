"use strict";

const mainArticlePage = document.getElementById("newsFeed");

function makeArticlePage(articleID){
    let currentArticle = articles.find(article => article.id == articleID);
    // console.log(currentArticle);
    let nRubrik = document.createElement("h1"); //artikelrubrik
    nRubrik.innerText = currentArticle.title;
    let nRegress = document.createElement("p"); //artikelinledning
    nRegress.innerText = currentArticle.text;
    let readMoreBox = document.createElement("div"); //läs mer låda
    readMoreBox.classList.add("readWholeBox");
    let readMoreText = document.createElement("p");
    readMoreText.classList.add("alreadySubscribed");
    readMoreText.innerText = "Detta är en låst artikel, redan prenumerant?";
    let nReadMore = document.createElement("span"); //läs mer span
    nReadMore.classList.add("subscribe");
    nReadMore.innerText = "Logga in här";
    readMoreBox.append(readMoreText, nReadMore);
    if (currentArticle.image !== false) { // om det finns en bild så ska en img skapas
        let nImg = document.createElement("img");
        nImg.classList.add("articleImage");
        nImg.setAttribute("src", currentArticle.image);
        (currentArticle.mostViewed !== false) ?  mainArticlePage.append(nRubrik, nImg, nRegress) : mainArticlePage.append(nRubrik, nImg, nRegress, readMoreBox);
        // if (currentArticle.mostViewed !== false) {
        //     mainArticlePage
        // }
        // mainArticlePage.append(nRubrik, nImg, nRegress, readMoreBox);
    } else {
        // mainArticlePage.append(nRubrik, nRegress, readMoreBox);
        (currentArticle.mostViewed !== false) ?  mainArticlePage.append(nRubrik, nRegress) : mainArticlePage.append(nRubrik, nRegress, readMoreBox);
    }
}