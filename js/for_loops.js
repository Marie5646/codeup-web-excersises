'use strict';

function showMultiplicationTable(number) {
for (let i = 1; i <= 10; i++){
       let result = i * number;
       console.log(`${number} * ${i} = ${result}`)}}



console.log(showMultiplicationTable(7))


//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


      for (let i =0;i <= 10 ; i++) {
          let random =Math.floor(Math.random() *201) + 20 ;
          if (random % 2 !== 0) {
              console.log(random + ' is odd' )
          }
          else
              console.log(random + ' is even')

      }

//Create a for loop that uses console.log to create the output shown below.

   for (let i =1;i <10 ; ++i) {
       console.log(i.toString().repeat(i));
   }









