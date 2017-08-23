// (function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(this.radius, 2);
            //this replaces circle object, but it can be replaced by circle.radius as long as it is inside the scope. If not inside scope then have to do circle.radius...its better to us this.radius in this situation because someone can change the variable name if they wanted to, so 'this' will always refer to the variabl
            return area; // TODO: return the proper value
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                var roundedArea= Math.round(circle.getArea());
            } else {
                roundedArea = circle.getArea();
            }
            //circle can also be this.getArea in this case
            console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    //don't use this.radius here because it is now outside the object (The object I'm referring to is circle)
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
// })();