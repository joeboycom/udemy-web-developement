// jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

// allows you to use static files in public folder
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
