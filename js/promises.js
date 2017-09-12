(function () {

    //Exercise Part 1: Problem 1
    "use strict";

    function wait(number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, number)
        })
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


    //Exercise Part 2: Problem 1 & 2


    function lastCommit(user) {
        return fetch(`https://api.github.com/users/${user}/events`, {headers: {"Authorization": "token 245052d97e34051ce5063e35f70517c9cfe1d207"}})
            .then((response) => response.json())
            .then((events) => events.map((event) => event.created_at));
    }
    lastCommit("brandonbcg123").then((events) => console.log(events.sort().reverse()[0]));

})();

// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.