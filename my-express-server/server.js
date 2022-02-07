// jshint esversion: 6

const express = require('express');

const app = express();

const port = 3004;

app.get("/", function(request, response) {
  response.send("<h1>Hello world</h1>");
}); // home page

app.get("/contact", function(request, response) {
  response.send("Contact me at joeboy229@gmail.com");
}); // contact page

app.get("/about", function(request, response) {
  response.send("​​I am a software engineer with 7 Years of experience in Android development. I am an inquisitive learner and I am passionate about using new technologies to improve project development speed. I strive to build products with excellent UI/UX and stable functions.");
}); // about page

app.get("/hobbies", function(request, response) {
  response.send("<ul><li>Coffee</li><li>Code</li><li>Learning</li></ul>");
}); // contact page

app.listen(port, function() {
  console.log("Server started on port 3000");
});
