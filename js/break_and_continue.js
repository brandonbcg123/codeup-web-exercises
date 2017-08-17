"use strict";

//Skipping Numbers Exercise
console.log("Skipping numbers:");

var isOdd;
//What thing are not a valid input: Greater than 50, Less than 1, Even numbers, and NaN
do {
    isOdd = Number(prompt("Please insert an odd number between 1 and 50."));

    if (isOdd % 2 === 1 && isOdd < 51 && isOdd > 0 && !isNaN(isOdd)) {
        break;
    }
} while(true);

console.log("Number to skip is: " + isOdd);

//my options are while and for loops

for (var i = 1; i < 50; i += 2) {
    if (isOdd === i) {
        console.log("Yikes! Skipping Number: " + isOdd);
        continue;
    }
    console.log("Here is an odd number: " + i);
}