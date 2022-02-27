// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.get("/", function(request, response) {
  response.send("<h1>Hello world</h1>");
});


app.listen(port, function() {
  console.log("Server started on port 3000");
});
