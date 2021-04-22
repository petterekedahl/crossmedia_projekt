"use strict";
const apiKey = "1c3c5f3ebf9a52995dde0ee8cbb54b9d";
const city = "Malmo";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=se&units=metric&appid=${apiKey}`;

let nyReq = new Request(weatherURL);

fetch(nyReq)
    .then(res => res.json())
    .then(res => {
        console.log(res.weather[0].icon);
        let newImg = document.createElement("img");
        newImg.setAttribute("src", `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`); // URL to the APIs own icons
        let newDesc = document.createElement("h4");
        newDesc.innerText = res.weather[0].description.toUpperCase();
        let newTemp = document.createElement("p");
        newTemp.innerText = `Temperatur: ${res.main.temp}°C`;
        document.getElementById("newsPlus").append(newImg, newDesc, newTemp);

    });