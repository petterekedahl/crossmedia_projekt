"use strict";

const mainArticlePage = document.getElementById("newsFeed");

function makeArticlePage(articleID){
    let currentArticle = articles.find(article => article.id == articleID);
    // console.log(currentArticle);
    let nRubrik = document.createElement("h1"); //artikelrubrik
    nRubrik.classList.add("articleTitle");
    nRubrik.innerText = currentArticle.title;
    let nRegress = document.createElement("p"); //artikelinledning
    nRegress.classList.add("articleIngress");
    nRegress.innerText = currentArticle.text;
    let nText = document.createElement("p"); //artikeltext
    nText.classList.add("articleParagraph");
    nText.innerText = currentArticle.paragraph;
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
        (currentArticle.prenum === false) ?  mainArticlePage.append(nRubrik, nImg, nRegress, nText) : mainArticlePage.append(nRubrik, nImg, nRegress, readMoreBox);

    } else {
        (currentArticle.prenum === false) ?  mainArticlePage.append(nRubrik, nRegress, nText) : mainArticlePage.append(nRubrik, nRegress, readMoreBox);
    }
}