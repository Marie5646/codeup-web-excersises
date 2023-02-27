'use strict';
 let age = -2

if(age>=16){
    console.log('you are old enough to drive');
} else if(age >0 && age < 16)
{
    console.log('you are not old enough to drive');
} else {
    console.log('not a valid age')
}

let username= 'user';
let password = 'password'

let userUsername= prompt('What is ur username?')
let userPassword= prompt('What is ur Password')

if(username===userUsername && password === userPassword) {
    console.log("Successfully Logged In")
} else if(username !== userUsername && password !== userPassword){
    console.log('Invalid username and password')
} else if (username!== userUsername) {
     console.log('Invalid Username')
} else if (password !== userPassword) {
    console.log('Invalid Username')
}

