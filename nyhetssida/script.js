"use strict";

//------------------Variables---------------------//
const logo = document.getElementById("logo");
const navContainer = document.getElementById("nav");
const dateContainer = document.getElementById("datumContainer");
const newsContainer = document.getElementById("news");
const justNowContainer = document.getElementById("senasteNytt");
const today = `${currentWeekDay} ${currentDay} ${currentMonth} ${currentYear}`;
let currentPage = location.pathname;
currentPage = currentPage.split("/");
currentPage = currentPage[currentPage.length - 1];
const indexPage = "index.php";


//------------------Functions--------------------//
function createNavItems(item){
    let nNavItem = document.createElement("div");
    nNavItem.classList.add("navItem");
    nNavItem.innerHTML = item.toUpperCase();
    return nNavItem;
}


//fixa lådorna och en "läs mer.."

//både prenumerera och läs mer --> pop up med info om tekniskt fel samt fält för epost-adress

//foxa en articlesida för de som funkar? eller för alla?

//göra det mobilanpassat

function createNews(article, container = newsContainer) {
    let nDiv = document.createElement("a");
    nDiv.setAttribute("href", `articlePage.php?id=${article.id}`);
    nDiv.classList.add("article");
    let nTitle = document.createElement("h2");
    let nSpan = document.createElement("span");
    nSpan.classList.add("newArticle");
    nSpan.innerText = "Just nu:";
    nTitle.innerText = article.title;
    if (article.justNu !== false) {
        nTitle.prepend(nSpan);
    }
    // nTitle.innerText = article.justNu ? `${nSpan} ${article.title}` : article.title;
    let nRegress = document.createElement("p");
    nRegress.innerText = article.text;  
    if (article.image !== false) {
        let nImg = document.createElement("img"); 
        nImg.setAttribute("src", article.image);
        nDiv.append(nTitle, nImg, nRegress);
    } else {
        nDiv.append(nTitle, nRegress);
    }
    container.append(nDiv);
}

//---------------Event handlers------------------//
// logo.addEventListener("click", () => {
//     location.reload();
// });


//-----------------Direct Code-------------------//

//inserts the current date into the news page
dateContainer.innerText = today.toUpperCase();

//creates the navBar
categories.forEach(category => {
    navContainer.append(createNavItems(category));
});


if (currentPage === indexPage) {
    //creates the senaste-nytt-news and removes it from the array
    createNews(articles[articles.length - 1], justNowContainer);
    articles.splice(articles.length - 1, 1);
    //creates the rest of the articles
    articles.forEach(article => {
        createNews(article);
    });
}
