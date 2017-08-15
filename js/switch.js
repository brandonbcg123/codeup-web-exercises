// "use strict";
//
// // Don't change the next two lines!
// // This creates two variables:
// //     one with the colors of the rainbow, and another with a single random
// //     another with a single random color value
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var color = colors[Math.floor(Math.random()*colors.length)];
// console.log("The random color generated is: " + color);
//
//     // TODO: create a case statement that will handle every color except indigo and violet
//     // TODO: when a color is encountered log a message that tells the color, and an object of that color
//     //       example: Blue is the color of the sky.
//
//     // TODO: create a default case that will catch indigo and violet
//     // TODO: for the default case, log: I do not know anything by that color.
// //Switch random color problem
// switch (color) {
//     case 'red':
//         console.log("The color of love is " + color + ".");
//         break;
//     case 'orange':
//         console.log("The color of delicious mango fruit is " + color + ".");
//         break;
//     case 'yellow':
//         console.log ("The color of the burning sun is " + color + ".");
//         break;
//     case 'green':
//         console.log ("The color of the dollar bill is " + color + ".");
//         break;
//     case 'blue':
//         console.log ("The color of the sky is " + color + ".");
//         break;
//     default:
//         console.log("I do not know anything by this color known as " + color + ".");
// }
//
//
// // HEB problem - Problem 1
// var nameCameron = "Cameron";
// var nameRyan = "Ryan";
// var nameGeorge = "George";
// var totalMoreThan$200 = 200;
// var cameronOriginal$ = 180;
// var ryanOriginal$ = 250;
// var georgeOriginal$ = 320;
// var discount = .1;
//
// console.log(nameCameron + ":");
// console.log("The amount " + nameCameron + " owed before the discount: $" + cameronOriginal$);
//
// if (cameronOriginal$ > totalMoreThan$200) {
//     console.log("The amount " + nameCameron + " owed after the discount: $" + cameronOriginal$ * (1 - discount));
// } else {
//     console.log("The amount " + nameCameron + " owed after the discount: $" + cameronOriginal$);
// }
//
// console.log(nameRyan + ":");
// console.log("The amount " + nameRyan + " owed before the discount: $" + ryanOriginal$);
//
// if (ryanOriginal$ > totalMoreThan$200) {
//     console.log("The amount " + nameRyan + " owed after the discount: $" + ryanOriginal$ * (1 - discount));
// } else {
//     console.log("The amount " + nameryan + " owed after the discount: $" + ryanOriginal$);
// }
//
// console.log(nameGeorge + ":");
// console.log("The amount " + nameGeorge + " owed before the discount: $" + georgeOriginal$);
//
// if (georgeOriginal$ > totalMoreThan$200) {
//     console.log("The amount " + nameGeorge + " owed after the discount: $" + georgeOriginal$ * (1 - discount));
// } else {
//     console.log("The amount " + nameGeorge + " owed after the discount: $" + georgeOriginal$);
// }
//
// //Notes for a more efficient way
// // const discountThreshold = 200;
// // const discountPercentage = 1 - discount;
// //
// // var cameronOriginalPrice = 180;
// // var georgeOriginalPrice = 300;
// //
// // var cameronFinalPrice = cameronOriginalPrice;
// // var georgeFinalPrice = georgeOriginalPrice;
// //
//
// //
// // if (cameronOriginalPrice >= discountThreshold) {
// //     cameronFinalPrice = cameronOriginalPrice * discountPercentage;
// // }
// //
// //
// // console.log('Cameron -- original: ' + cameronOriginalPrice + ' - final: ' + cameronFinalPrice)
// //
// // console.log('Cameron -- original: ' + cameronOriginalPrice + ' - final: ' + cameronFinalPrice)
// // console.log('Cameron -- original: ' + cameronOriginalPrice + ' - final: ' + cameronFinalPrice)
//
//
// //Buy a car or house problem - Problem 2
// var flipACoin = Math.floor(Math.random()* 2)
// console.log("Using If/Else Statements:");
// console.log("Coin flip generated a number of: " + flipACoin);
// if (flipACoin === 0) {
//     console.log("Isaac needs to buy a car.")
// } else {
//     console.log("Isaac need to buy a house.")
// }
//
// //ternary operator
// console.log("Using a ternary operator:");
// console.log("Coin flip generated a number of: " + flipACoin);
// var buyOptions = (flipACoin === 0) ? console.log("Isaac needs to buy a car.") : console.log("Isaac need to buy a house.")
//

//Promotion at Walmart problem - Problem 3
// var luckyNumber = Math.floor(Math.random()* 6);
// console.log("Lucky Number Generated: " + luckyNumber);
// var receipt$ = 60;
// var discountOne = 0.1;
// var discountTwo = 0.25;
// var discountFour = 0.5;
// var discountFive = 1;
//
// switch (luckyNumber) {
//     case 1:
//         console.log("I have to pay: $" + receipt$ * (1 - discountOne));
//         break;
//     case 2:
//         console.log("I have to pay: $" + receipt$ * (1 - discountTwo));
//         break;
//     case 4:
//         console.log("I have to pay: $" + receipt$ * (1 - discountFour));
//         break;
//     case 5:
//         console.log("I have to pay: $" + receipt$ * (1 - discountFive));
//         break;
//     default:
//         console.log("I have to pay: $" + receipt$);
// }


var numberChosen = confirm("Would you like to enter a number?");


if (numberChosen) {
    var enterNumber = prompt("Please enter a number.");
}

if (enterNumber === NaN) {
    alert("This is not a number!")
}

if (enterNumber % 2 === 0) {
    alert(enterNumber + " is even.");
} else {
    alert(enterNumber + " is odd.");
}
var sum = enterNumber + 100;
alert("The number " + enterNumber + " + 100 equals: " + sum);

if (enterNumber > 0) {
    alert(enterNumber + " is positive.");
} else {
    alert(enterNumber + " is negative.");
}