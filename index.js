const apikey = "e4d2344c2546181de41edeaf454a1304";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
}

checkWeather()

