"use strict";


var numberBetween1_10 = prompt("Please enter a number between 1 and 10.");

for (var i = 1; i <= 10; i++) {
    var total = i * numberBetween1_10;
    console.log(numberBetween1_10 + "x" + i + "=" + total);
}