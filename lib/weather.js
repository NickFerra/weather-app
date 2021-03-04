const fetch = require("node-fetch");
require("dotenv").config();

const url = `http://api.openweathermap.org/data/2.5/weather?q=Wrexham,gb&units=metric&uk&appid=${process.env.APPID}`;

const getWeather= async() => {
    let data = await fetch(url);
    console.log(await data.json());
}

getWeather();
