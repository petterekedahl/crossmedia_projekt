"use strict";

//------------------Variables---------------------//
const navContainer = document.getElementById("nav");
const dateContainer = document.getElementById("datumContainer");
const today = `${currentWeekDay}, ${currentDay} ${currentMonth} ${currentYear}`;


//------------------Functions--------------------//
function createNavItems(item){
    let nNavItem = document.createElement("div");
    nNavItem.classList.add("navItem");
    nNavItem.innerHTML = item;
    return nNavItem;
}


//-----------------Direct Code-------------------//

//inserts the current date into the news page
dateContainer.innerText = today.toUpperCase();

//creates the navBar
categories.forEach(category => {
    navContainer.append(createNavItems(category));
});