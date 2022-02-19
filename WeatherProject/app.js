// jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")

  // res.send("Server is up and running."); // We can only have one res.send in any given one of these app methods
});

app.post("/", function(req, res) {
  console.log(req.body.cityName);
  getWeather(req.body.cityName, res);
  console.log("Post request received");
});

function getWeather(query, res) {
  // const query = "London";
  const appid = "499981c60f06e6f25a39cdbe21601753";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appid+ "&units=" + units;

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
}

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
