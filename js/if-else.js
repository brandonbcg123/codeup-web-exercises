"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];
console.log("The random color generated is: " + color);

var favorite = 'green'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

if (color === 'red') {
    console.log("The color of love is " + color + ".");
} else if (color === 'orange') {
    console.log("The color of delicious mango fruit is " + color + ".");
} else if (color === 'yellow') {
    console.log("The color of the burning sun is " + color + ".");
} else if (color === 'green') {
    console.log("The color of the dollar bill is " + color + ".")
} else if (color === 'blue') {
    console.log("The color of the sky is " + color + ".")
} else {
    console.log("I do not know anything by this color known as " + color + ".")
}

var matchingFavoriteColor = (color === favorite) ? console.log("Awesome, " + color + " is my favorite color!") : console.log("Oh, " + color + " is not my favorite color.");
