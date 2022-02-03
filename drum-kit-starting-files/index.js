var numberOfDrimButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrimButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("Click");
    // What to do when click detected.
  });
}
