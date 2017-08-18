"use strict";

//For Loop Exercises

//Multiplication Table Exercise
console.log("Multiplication Table:");
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
console.log("Random Odd or Even 10 Number Generator:");
for (var e = 1; e <= 10; e++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even")
    } else {
        console.log(randomNumber + " is odd")
    }
}


//Countdown By 5 Exercise
console.log("Countdown by 5:");
for (var m = 100; m >= 5; m -= 5) {
    console.log(m);
}


// var userInput = prompt("How many lines of stars do you want?");
// var star = "";
//
// (function () {
//     console.log("We are starting here!!!!!!!!!!!!!!");
//     var userInput = prompt("How many lines of stars do you want?");
//     var star = "";
//
//     for (var i = 1; i <= userInput; i++) {
//
//         for (var e = 0; e < i; e++) {
// //console.log(e);
//             star = star + " * ";
//         }
//         console.log(star);
//         star = "";
//     }
//     console.log("We are ending here!!!!!!!!!!!!!!");
// })();