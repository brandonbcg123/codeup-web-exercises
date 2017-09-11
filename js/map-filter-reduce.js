(function () {

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
        },
    ];

    console.log(users);

    // Look below: users.filter is accessing the whole array of object and (user.languages.length >= 3) is making sure that only the users who know three or more languages are stored in the new array...filter will return the whole array of object

    let userLanguages = users.filter(user => user.languages.length >= 3);
    console.log(userLanguages);


    //map will return an array of what we ask for
    let userEmails = users.map(user => user.email);
    console.log(userEmails);

//     Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user
//object is used as an initial value, but it doesn't have any value yet, so obj[user.id] = user will get the obj and property of the id of each object of the original array.
// user is each item in the array - in this case each object in the original array
    // let objectConversion = users.reduce((obj, user) => {
    //     obj[user.id] = user;
    //     return obj;
    // },{});
    // console.log(objectConversion);

    let objectConversion = {};
    users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, objectConversion);
    console.log(objectConversion);
// }());