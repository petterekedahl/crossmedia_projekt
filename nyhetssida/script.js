"use strict";

//------------------Variables---------------------//
const navContainer = document.getElementById("nav");
const dateContainer = document.getElementById("datumContainer");
const newsContainer = document.getElementById("news");
const justNowContainer = document.getElementById("senasteNytt");
const today = `${currentWeekDay} ${currentDay} ${currentMonth} ${currentYear}`;


//------------------Functions--------------------//
function createNavItems(item){
    let nNavItem = document.createElement("div");
    nNavItem.classList.add("navItem");
    nNavItem.innerHTML = item.toUpperCase();
    return nNavItem;
}

//slå ihop de 2, bara att först anropa det med sista elementet, plocka bort och sedan köra för resten

//fixa lådorna och en "läs mer.."

//både prenumerera och läs mer --> pop up med info om tekniskt fel samt fält för epost-adress

//foxa en articlesida för de som funkar? eller för alla?

//göra det mobilanpassat

function createNewsArticle(article) {
    let nDiv = document.createElement("div");
    nDiv.classList.add("article");
    let nTitle = document.createElement("h2");
    nTitle.innerText = article.justNu ? `Just nu: ${article.title}` : article.title;
    let nRegress = document.createElement("p");
    nRegress.innerText = article.text;
    nDiv.append(nTitle, nRegress);
    return nDiv;
}

function createJustNow(article) {
    let nRubrik = document.createElement("h2");
    nRubrik.innerText = `Just nu: ${article.title}`;
    let nRegress = document.createElement("p");
    nRegress.innerText = article.text;
    justNowContainer.append(nRubrik, nRegress);
    articles.splice(articles.length - 1, 1);
}

//-----------------Direct Code-------------------//

//inserts the current date into the news page
dateContainer.innerText = today.toUpperCase();

//creates the navBar
categories.forEach(category => {
    navContainer.append(createNavItems(category));
});

createJustNow(articles[articles.length - 1])

articles.forEach(article => {
    newsContainer.append(createNewsArticle(article));
});

