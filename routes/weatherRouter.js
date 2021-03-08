const express = require("express");
const router = express.Router();
const getWeather = require("../lib/weather");
router.get("/", (req, res) => {
  res.render("weather");
});
router.post("/", async (req, res) => {
  let city = req.body.city;
  let code = req.body.code;
  let data = await getWeather(city, code);
  if (data.cod == "404") {
    res.render("weather", {
      err: "The provided location doesn't exist",
    });
    return;
  }
  let name = data.name;
  let description = data.weather[0].description;
  let temp = data.main.temp;
  let feels_like = data.main.feels_like;
  res.render("weather", {
    name,
    data: { description, temp, feels_like },
    listExists: true,
  });
});

module.exports = router;