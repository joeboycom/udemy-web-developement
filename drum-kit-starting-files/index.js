var numberOfDrimButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrimButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("Click");
    // What to do when click detected.
  });
}


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
