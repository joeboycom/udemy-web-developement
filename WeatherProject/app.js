// jshint esversion: 6

const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=499981c60f06e6f25a39cdbe21601753&units=metric";

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const object = {
        name: "Joe",
      };
      const temp = weatherData.main.temp; // you can copy path from JSON Awesome
      const description = weatherData.weather[0].description; // you can copy path from JSON Awesome
      console.log(JSON.stringify(object)); // {"name":"Joe"}
      console.log(weatherData); // whole weather response
      console.log(temp); // 7.7
      console.log(description); // moderate rain
    });
  });
  res.send("Server is up and running.");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
