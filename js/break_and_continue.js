"use strict";

//Skipping Numbers Exercise
console.log("Skipping numbers:");

var isOdd = Number(prompt("Please insert an odd number between 1 and 50"));
//What thing are not a valid input: Greater than 50, Less than 1, Even numbers, and NaN
do {
    isOdd = Number(prompt("Please insert an odd number between 1 and 50."));
} while(isOdd % 2 === 0 || isOdd > 50 || isOdd < 0 || isNaN(isOdd));

console.log("Number to skip is: " + isOdd);

//my options are while and for loops

for (var i = 1; i < 50; i += 2) {
    if (isOdd === i) {
      console.log("Yikes! Skipping Number: " + isOdd);
      continue;
    }
    console.log("Here is an odd number: " + i);
}