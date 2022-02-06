// jshint esversion: 6

const express = require('express');

const app = express();

const port = 3001;

app.get("/", function(request, response) {
  response.send("Hello");
});

app.listen(port, function() {
  console.log("Server started on port 3000");
});
