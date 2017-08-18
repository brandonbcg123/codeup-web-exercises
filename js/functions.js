(function () {
    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     *  > sayHello("codeup") // returns "Hello, codeup!"
     */
    function sayHello(name) {
        return "Hello " + name + "!";
    }

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     * console.log 'helloMessage' to check your work
     * Now store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    // var helloMessage = sayHello("Brandon");
    // console.log(helloMessage);

    var myName = "Brandon";
    var helloMessage = sayHello(myName);
    console.log(helloMessage);



// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
    var random = Math.floor((Math.random() * 100) + 1);

    /**
     * TODO:
     * Create a function called 'isOdd' that takes a number as a parameter.
     * The function should use the ternary operator to return a message.
     * The message should contain the number being checked, and whether or not the
     * number is odd
     *
     * Example
     *  > isOdd(42) // returns "42 is not odd!"
     *
     * Call the function 'isOdd' passing the variable 'random' as a parameter.
     * console.log *outside of the function* to check your work
     */

    function isOdd(number){
        var numberInside = (number % 2 !== 0) ? number + " is an odd number." : number + " is an even number.";
        return numberInside;
    }
    console.log(isOdd(random));
    /**
     * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant
     *
     * the function should accept a tip percentage and the total of the bill, and
     * return the amount to tip
     *
     * Example
     *  > calculateTip(0.20, 20) // returns 4
     */
    function calculatorTip(billTotal, tipPercent) {
        var tipAmount = billTotal * (tipPercent / 100);
        return tipAmount;
    }
    console.log("My input example:");
    console.log("Tip is $" + calculatorTip(54, 16).toFixed(2));

    /**
     * TODO: use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */
    var billTotal = prompt("Enter the total amount of your bill.");
    var tipPercent = prompt("Enter the percentage you would like to tip.");
    var totalTip = calculatorTip(billTotal, tipPercent);

    alert("The total amount of your tip is: $" + totalTip.toFixed(2));
    console.log("User Input:");
    console.log("The total bill is: $" + billTotal);
    console.log("The customer gave a percent tip of: " + tipPercent + "%");
    console.log("The tip amount is: $" + totalTip.toFixed(2));
})();