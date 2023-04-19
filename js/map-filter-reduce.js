const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 5
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 6
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 7
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const three = users.filter(n => n.languages.length >= 3);
console.log(three);


var emails = users.map(function(n) {
    return n.email;
});
console.log(emails);


const years = users.reduce((total, year) => {
    return total + year.yearsOfExperience;
}, 0);

console.log(years/users.length)



$.ajax({
    url:'https://randomuser.me/api/',
    dataType:'json',
    success: function (data){
        data.results.reduce((newUserObj , user) => {
            newUserObj.name = user.name.first + " " + user.name.last;
            newUserObj.username = user.login.username;
            newUserObj.password = user.login.password;
            newUserObj.avatar = user.picture.thumbnail;

            console.log(newUserObj)
        })
    }
})








const longestEmail = users.reduce((longest, user) => {
    if (longest.length > user.email.length) {
        return longest;
    } else {
    return user.email;
    }
 }, "")

console.log(longestEmail)


