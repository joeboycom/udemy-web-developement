// jshint esversion:6

// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt");

// npm install superheroes
// node index.js
const superheroes = require('superheroes');
var heros = superheroes.all;  //=> ['3-D Man', 'A-Bomb', …]
var hero = superheroes.random(); //=> 'Spider-Ham'
console.log(heros);
console.log(hero);
