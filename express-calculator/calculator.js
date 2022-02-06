// jshint esversion: 6

const express = require('express');

const app = express();

const port = 3005;

app.get("/", function(request, response) {
  response.send("<h1>Hello world</h1>");
}); // home page

app.listen(port, function() {
  console.log("Server started on port 3000");
});
