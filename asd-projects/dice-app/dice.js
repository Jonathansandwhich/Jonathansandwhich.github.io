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
  
  function makeDot(_top, _left, _elementID) {
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die");
}


function rollDie(_dieID) {
var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
}

function handleClick() {
  rollDie("#die");
}
$("#die").on("click", handleClick);
});
