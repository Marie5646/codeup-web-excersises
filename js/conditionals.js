"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


 function analyzeColor(color){
      if (color === 'blue') {
         return 'blue is the color of blueberries';
    } else if (color === 'red') {
        return 'red is the same color is Apples';
    } else if (color === 'green') {
        return 'zucchini is the same color as Green';
    } else
        return ('Im not sure about the color '+ color);
    }
    console.log(analyzeColor('pink'));





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    console.log(analyzeColor(randomColor))

    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */

    function analyzeColor(color) {
    } switch(color){
        case"blue":
            console.log('Blue is the same color as blueberries');
            break
        case"red":
            console.log('Red is the same color as apples');
            break
        case"yellow":
            console.log('Yellow is the color of the sun');
            break
        case"indigo":
            console.log('Indigo is similar purple');
            break
        case"green":
            console.log('Green is the same color as Broccoli');
            break
        case"orange":
            console.log('Orange is the same color as oranges');
            break
        case"violet":
            console.log('Violet is a pretty color');
            break
        default:
            console.log(color + 'is not a valid color');
    }
console.log(analyzeColor('pink'))

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

 let usercolor= prompt('What is your favorite color?');

  alert(analyzeColor(usercolor))

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example
     **/

    function calculateTotal(luckyNumber, totalAmt) {
        if (luckyNumber === 0) {
            let discount1 = (0 )
            return (totalAmt - discount1);
        } else if (luckyNumber === 1) {
            let discount2 = (0.10 * totalAmt);
            return (totalAmt - discount2)
        } else if (luckyNumber === 2) {
            let discount3 = (0.25 * totalAmt)
            return (totalAmt - discount3);
        } else if (luckyNumber === 3) {
            let discount4 = 0.35 * totalAmt
            return (totalAmt - discount4);
        } else if (luckyNumber === 4) {
            let discount5 = 0.50 * totalAmt;
            return (totalAmt - discount5);
        } else if (luckyNumber === 5) {
            let discount6 = (1.00 * totalAmt)
            return (totalAmt - discount6);
        } else {

        }
    }

     console.log(calculateTotal(3,100))

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */

//Generate a random number between 0 and 6
    let luckyNumber = Math.floor(Math.random(0) * 6);

    let userTotal = prompt('What is your total bill?')
    alert('your lucky number is ' + luckyNumber)

    alert('Your Total before discount is $ ' + userTotal)
    alert('Your price after discount is $ ' + (calculateTotal(luckyNumber, userTotal)));


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */


    let useranswer = confirm(' Would you like to enter a number? ')
         if (useranswer === true) {
             let usernum = Number(prompt('What is your number ? '));
        if (usernum % 2 == 0) {
            alert("Your number is even.")
        } else if (usernum % 2 != 0) {
            alert('Your number is odd')
        }
        if (usernum >= 0) {
            alert('Your number ' + usernum + ' is positive')
        } else if (usernum < 0) {
            alert('Your number ' + usernum + ' is negative')
        }
        alert('Your number + 100 is ' + (usernum + 100));
        } else{
            alert('Your number is invalid')


}
