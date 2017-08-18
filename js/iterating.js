(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Umari", "Mauro", "Kathy", "Shadeed"];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log("There are " + names.length + " names in the array.");

    // TODO: Create log statements that will print each of the names array elements individually. (now using a for loop)

   //For Loop
    for (var i = 0; i < names.length; i++) {
       console.log(names[i]);
   }

   //For-Each Loop
   // Can take out array in the function parameter as it is not needed in this case
    names.forEach(function (element) {
        console.log(element);
    });
})();