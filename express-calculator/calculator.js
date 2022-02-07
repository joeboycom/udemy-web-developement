// jshint esversion: 6

const express = require('express');

const app = express();

const port = 3005;

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html"); // path: root/index.html
  // because of __dirname, we don't have to know where this file resides.
}); // home page

app.listen(port, function() {
  console.log("Server started on port 3005");
});
