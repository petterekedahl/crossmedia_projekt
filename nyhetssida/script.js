"use strict";

//TO DO:
// - footern
// - göra det mobilanpassat

//------------------Variables---------------------//
const logo = document.getElementById("logo");
const navContainer = document.getElementById("nav");
const dateContainer = document.getElementById("datumContainer");
const newsContainer = document.getElementById("news");
const newsWrap = document.getElementById("newsFeed");
const mostViewedContainer = document.getElementById("mostViewed");
const justNowContainer = document.getElementById("senasteNytt");
const today = `${currentWeekDay} ${currentDay} ${currentMonth} ${currentYear}`;
let currentPage = location.pathname;
currentPage = currentPage.split("/");
currentPage = currentPage[currentPage.length - 1];
const indexPage = "index.php";
let navItems;
let currentFilter;
let subscribeBtns;
let mostViewedArticles = [...articles];

//------------------Functions--------------------//
function createNavItems(item){
    let nNavItem = document.createElement("div");
    nNavItem.classList.add("navItem");
    nNavItem.innerHTML = item.toUpperCase();
    return nNavItem;
}

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

//sidebar about most viewed articles
function createMostViewed(article) {
    let nDiv = document.createElement("a");
    nDiv.setAttribute("href", `articlePage.php?id=${article.id}`);
    nDiv.classList.add("article", "mostViewed");
    let nTitle = document.createElement("h5");
    nTitle.innerHTML = article.title;
    nDiv.append(nTitle);
    mostViewedContainer.append(nDiv);
}

//subscription overlay (aka santas little helper)
function reDirrr(e) {
    console.log(e.target);
    let overlay = document.createElement("div");
    overlay.setAttribute("id", "subscribing-overlay");
    let nGif = document.createElement("img");
    nGif.setAttribute("src", "images/circle.gif");
    overlay.append(nGif);
    document.body.prepend(overlay);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        window.location.href = "http://privateprotection.se/";
    }, 3000);
}

//-----------------Direct Code-------------------//

//inserts the current date into the news page
dateContainer.innerText = today.toUpperCase();

//creates the navBar
categories.forEach(category => {
    navContainer.append(createNavItems(category));
});

//save all the navItems
navItems = document.querySelectorAll(".navItem");

//save all the subscribeElmnts
subscribeBtns = document.querySelectorAll(".subscribe");

mostViewedArticles = mostViewedArticles.filter(article => article.mostViewed !== false);
for (let i = mostViewedArticles.length - 1; i >= 0; i--) {
    createMostViewed(mostViewedArticles[i]);
}

if (currentPage === indexPage) {
    //creates the senaste-nytt-news and removes it from the array
    createNews(articles[articles.length - 1], justNowContainer);
    articles.splice(articles.length - 1, 1);
    //creates the rest of the articles
    for (let i = articles.length - 1; i >= 0; i--) {
        createNews(articles[i]);
    }
}

//---------------Event handlers------------------//

//when clicking on nav, only load articles with the category
navItems.forEach(navItem => {
    navItem.addEventListener("click", (event) => {
        navItems.forEach(it => {
            it.style.removeProperty("color");
            it.style.removeProperty("text-decoration");
        });
        event.target.style.color = "black";
        event.target.style.textDecoration = "underline";
        newsWrap.innerHTML = "";
        let nContainer = document.createElement("div");
        nContainer.classList.add("sortedContainer");
        newsWrap.append(nContainer);
        articles.filter((article) => {
            if (article.category === event.target.innerText.toLowerCase()){
                createNews(article, nContainer);
            }
        });
    });
});

//when clicking on prenumeration or login, the function reDirrr is called where the user gets redirected to the game app after some gif

subscribeBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        reDirrr(event);
    });
});