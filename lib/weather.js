const fetch = require("node-fetch");
require("dotenv").config();


const getWeather= async(city, code) => {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},gb&units=metric&${code}&appid=${process.env.APPID}`);
    return await data.json();
}

module.exports = getWeather;
