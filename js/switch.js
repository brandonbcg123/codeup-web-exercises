"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single random
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.

switch (color) {
    case 'red':
        console.log("The color of love is " + color + ".");
        break;
    case 'orange':
        console.log("The color of delicious mango fruit is " + color + ".");
        break;
    case 'yellow':
        console.log ("The color of the burning sun is " + color + ".");
        break;
    case 'green':
        console.log ("The color of the dollar bill is " + color + ".");
        break;
    case 'blue':
        console.log ("The color of the sky is " + color + ".");
        break;
    default:
        console.log("I do not know anything by this color known as " + color + ".");
}