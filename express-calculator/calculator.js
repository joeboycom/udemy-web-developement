// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3005;

// by setting that extended option to true, that basicall allows us to post nested objects.
app.use(bodyParser.urlencoded({extended: true}));

// home page
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html"); // path: root/index.html
  // because of __dirname, we don't have to know where this file resides.
});

app.post("/", function(request, response) {
  var num1 = Number(request.body.n1);
  var num2 = Number(request.body.n2);
  var total = num1 + num2;
  response.send("The result of the calculation is " + total);
});

// bmicalculator page
app.get("/bmicalculator", function(request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html"); // path: root/bmicalculator.html
  // because of __dirname, we don't have to know where this file resides.
});

app.post("/bmicalculator", function(request, response) {
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  console.log(weight);
  console.log(height);
  var bmi = weight / (height * height);
  response.send("You BMI is " + bmi);
});

app.listen(port, function() {
  console.log("Server started on port 3005");
});
