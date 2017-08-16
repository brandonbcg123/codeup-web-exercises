"use strict";

//For Loop Exercises

//Multiplication Table Exercise
var numberBetween1_10 = parseInt(prompt("Please enter a number between 1 and 10."));

for (var a = 1; a <= 10; a++) {
    if (numberBetween1_10 <= 0 || numberBetween1_10 > 10 || isNaN(numberBetween1_10) || numberBetween1_10 === null) {
        numberBetween1_10 = parseInt(prompt("Please enter a number between 1 and 10."));
    }
}

for (var i = 1; i <= 10; i++) {
    var total = i * numberBetween1_10;
    console.log(numberBetween1_10 + "x" + i + "=" + total);
}

//Random Odd or Even 10 Number Exercise
for (var e = 1; e <= 10; e++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even")
    } else {
        console.log(randomNumber + " is odd")
    }
}