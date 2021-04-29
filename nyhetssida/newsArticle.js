"use strict";

const mainArticlePage = document.getElementById("newsFeed");

function makeArticlePage(articleID){
    let currentArticle = articles.find(article => article.id == articleID);
    // console.log(currentArticle);
    let nRubrik = document.createElement("h1");
    nRubrik.innerText = currentArticle.title;
    let nRegress = document.createElement("p");
    nRegress.innerText = currentArticle.text;
    let nReadMore = document.createElement("span");
    nReadMore.classList.add("subscribe");
    nReadMore.innerText = "Läs hela artikeln";
    if (currentArticle.image !== false) {
        let nImg = document.createElement("img");
        nImg.classList.add("articleImage");
        nImg.setAttribute("src", currentArticle.image);
        mainArticlePage.append(nRubrik, nImg, nRegress, nReadMore);
    } else {
        mainArticlePage.append(nRubrik, nRegress, nReadMore);
    }
}