var randomNumber1 = Math.round(Math.random()*5) + 1;
var randomNumber2 = Math.round(Math.random()*5) + 1;

var dice1 = "images/dice" + randomNumber1.toString() + ".png";
var dice2 = "images/dice" + randomNumber2.toString() + ".png";

document.querySelectorAll("img")[0].setAttribute("src", dice1);
document.querySelectorAll("img")[1].setAttribute("src", dice2);

console.log(dice1);
console.log(dice2);


if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!";
  document.getElementById("emoj1").style.display = "block";
} else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins!";
  document.getElementById("emoj2").style.display = "block";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
