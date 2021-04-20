"use strict";

const mainArticlePage = document.getElementById("articleBody");

function makeArticlePage(articleID){
    let currentArticle = articles.find(article => article.id == articleID);
    // console.log(currentArticle);
    let nRubrik = document.createElement("h1");
    nRubrik.innerText = currentArticle.title;
    let nRegress = document.createElement("p");
    nRegress.innerText = currentArticle.text;
    let nReadMore = document.createElement("span");
    nReadMore.classList.add("subscribe");
    if (currentArticle.image !== false) {
        let n
    }

}