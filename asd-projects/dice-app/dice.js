$(document).ready(function () {
  // Your code goes here
$("<div>")
  .css("height", 45)
  .css("width", 45)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 150)
  .css("left", 150)
  .appendTo("#die");
  
  function makeDot(top, left, elementID){
  $("<div>")
  .css("height", 225)
  .css("width", 75)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .css("boarder-radius", "50%")
  .appendTo(elementID);
}
makeDot(212.5, 212.5, "#die");
makeDot(87.5, 87.5, "#die");
makeDot(337.5, 337.5, "#die");

function rollDie(dieID) {
var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
}

function handleClick() {
  rollDie("#die");
}
$("#die").on("click", handleClick);
});
