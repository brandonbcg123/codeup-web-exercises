(function (){

    //Exercise Part 1: Problem 1
    "use strict";
    function wait(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, number)
        })
    }
        wait(1000).then(() => console.log('You\'ll see this after 1 second'));
        wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


        //Exercise Part 2: Problem 1

    fetch(url, {headers: {"Authorization": "token 245052d97e34051ce5063e35f70517c9cfe1d207"}})
})();