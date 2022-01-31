document.querySelector("a");              // <a href="https://www.google.com">Google</a>
document.querySelector("li a");           // <a href="https://www.google.com">Google</a>
document.querySelector("#list a");        // <a href="https://www.google.com">Google</a>
document.querySelector("#list .item");    // <li class="item"><a href="https://www.google.com">Google</a></li>
document.querySelector("li.item");        // <li class="item"><a href="https://www.google.com">Google</a></li>
document.querySelectorAll("#list .item"); // NodeList(3) [li.item, li.item, li.item]
document.getElementById("title");         // <h1 id="title">h1 title</h1>

document.querySelector("li").style.color = "red";    // only change the color of the bullet point of 'Google' text
document.querySelector("li a").style.color = "red";    // it change the color of 'Google' text
document.getElementsByTagName("li")[2].style.color = "purple";    // change 'Third' text color to purple
document.querySelectorAll("#list .item")[1].style.color = "blue"; // change 'Second' text color to blue
document.getElementsByClassName("btn");   // get whole complete HTMLCollection array, so that you cannot use this way to change properties
