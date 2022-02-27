// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var today = new Date();
var currentDay = today.getDay()

app.get("/", function(req, res) {

  if (currentDay ===6 || currentDay ===0) {
    res.write("<h1>Yay it's the weekend!</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});


app.listen(port, function() {
  console.log("Server started on port 3000");
});
