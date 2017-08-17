"use strict";

//While Loop Exercises


//Multiples of 2 exercise
console.log("Multiples of 2:");
var multiplesOf2 = 1;

while (multiplesOf2 < 65536) {
    multiplesOf2 *= 2;
    console.log(multiplesOf2);
}


//Do-While Exercise
//Ice Cream Cone Seller Exercise
console.log("Ice Cream Cone Seller:");
var allCones = Math.floor(Math.random() * 50) + 50;


console.log("The total amount of cones to sell is: " + allCones);
//Put the Mathfloor(Math.random() * 5) + 1 inside the do-while loop
do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (allCones >= cones) {
        console.log(cones + " cones sold...");
        console.log((allCones -= cones) + " remaining.");
    } else {
        console.log("Cannot sell " + cones + " I only have " + allCones + " left.");
    }
} while (allCones > 0);

console.log("Yay! I sold all the cones!");