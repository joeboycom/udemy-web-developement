var numberOfDrimButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrimButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { // type = "click"
    console.log(this);            // <button class="d drum">d</button>
    console.log(this.innerHTML);  // d
    console.log(this.style.color = "white");         
  });
}


// var audio = new Audio("sounds/crash.mp3");
// audio.play();

/* Higher Order Functions - Hiher order functions aere functions that can take other functions as inputs. */
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(number1, number2, operator) {
  return operator(number1, number2);
}
// ex:ı
// debugger; // make Chrome into debug mode
// calculator(3, 4, multiple);
// 12 // result
