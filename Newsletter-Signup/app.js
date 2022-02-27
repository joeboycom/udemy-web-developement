// jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// allows you to use static files in public folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);
});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});


// MailChimp
// API key
// 6878a45a67930a9fe01106c0728c6ba4-us14
// List Id
// ffe2dc5189
