"use strict";

//------------------Variables---------------------//



//------------------Functions--------------------//



//-----------------Direct Code-------------------//

//inserts the current date into the news page
const dateContainer = document.getElementById("datumContainer");
const today = `${currentWeekDay}, ${currentDay} ${currentMonth} ${currentYear}`
dateContainer.innerText = today.toUpperCase();
