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
      const weatherDescription = weatherData.weather[0].description; // you can copy path from JSON Awesome
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
      console.log(JSON.stringify(object)); // {"name":"Joe"}
      console.log(weatherData); // whole weather response
      console.log(temp); // 7.7
      console.log(weatherDescription); // moderate rain



      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature is " + temp + " degress Celcius</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
  // res.send("Server is up and running."); // We can only have one res.send in any given one of these app methods
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
