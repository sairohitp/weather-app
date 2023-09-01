const apikey = "e4d2344c2546181de41edeaf454a1304";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=germany&units=metric";

async function checkWeather() {
    const response = await fetch(apiURL + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data)
}

checkWeather()