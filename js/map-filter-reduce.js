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

    // Look below: users.filter ios accessing the whole array of object and (user.languages.length >= 3) is making sure that only the users who know three or more languages are stored in the new array.

    let userLanguages = users.filter(user => user.languages.length >= 3);
    console.log(userLanguages);

    let userEmails = users.map(user => user.email);
    console.log(userEmails);

}());