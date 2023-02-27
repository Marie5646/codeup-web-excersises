'use strict';




let isNotValid
let oddNumber;
    do {
        oddNumber = Number(prompt('Enter a Odd Number Between 1-50'));
        if ((oddNumber > 50 || oddNumber < 1) || oddNumber % 2 === 0) {
           isNotValid = true;
        } else {
           break;
        }
        console.log(isNotValid);
    } while(isNotValid);


    console.log('Number to skip is; ' + oddNumber);
    for(let i = 1; i<=50;i+=2){
        if(i===oddNumber){
            console.log('Yikes Skipping Number; ' +i);
            continue;
        }
        console.log('Here is an odd number; ' + i);
    }












