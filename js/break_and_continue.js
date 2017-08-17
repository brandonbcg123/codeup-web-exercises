"use strict";

//Skipping Numbers Exercise
console.log("Skipping numbers:");

var isOdd = Number(prompt("Please insert an odd number between 1 and 50"));
//What thing are not a valid input: Greater than 50, Less than 1, Even numbers, and NaN
while (isOdd % 2 === 0) {
    if (isOdd === "") {
        break;
    }
    alert("The value you entered was not odd.");
    isOdd = Number(prompt("Please insert an odd number between 1 and 50."));
}

while (isOdd > 51) {
    if (isOdd === "") {
        break;
    }
    alert("The value you entered was not 50 or lower.");
    isOdd = Number(prompt("Please insert a number between 1 and 50"));
}

while (isOdd < 0) {
    if (isOdd === "") {
        break;
    }
    alert("The value you entered was not above or 0.");
    isOdd = Number(prompt("Please insert a number between 1 and 50."));
}

while (isNaN(isOdd)) {
    if (isOdd === "") {
        break;
    }
    alert("The value you entered was not an actual number.");
    isOdd = Number(prompt("Please insert a number between 1 and 50."));
}

//What is the exercise asking for me to do: Once the user picks an odd number in between 1 and 50 console.log that number a a skipping number, console.log all the odd number between 1 and 50, the odd number the user picked needs to display a different message showing that it should be skipped.

console.log("Number to skip is: " + isOdd);

//my options are while and for loops

for (var i = 1; i < 50; i += 2) {
    if (isOdd === i) {
      console.log("Yikes! Skipping Number: " + isOdd);
      continue;
    }
    console.log("Here is an odd number: " + i);
}