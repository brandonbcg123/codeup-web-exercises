(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    var person = new Object();

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    person = {
        firstName: "Brandon",
        lastName: "Gossen"
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return("Hello from " + this.firstName + " " + this.lastName + "!");
    };
    console.log(person.sayHello());
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper) {
        var discountpercent = .10;
        var amountAfterDiscount, discount;
        if(shopper.amount > 200) {
            discount = shopper.amount * discountpercent;
        } else {
            discount = 0
        }
        amountAfterDiscount = shopper.amount - discount;
        console.log(shopper.name + "'s original price before the discount was $" + shopper.amount + "; the total discount " + shopper.name + " received was $" + discount + "; " + shopper.name + "'s price after the discount was $" + amountAfterDiscount + ".");
    })

})();