 "use strict";
 console.log("Hello from external JavaScript");

 alert("Welcome to my Website!")

 let userinput= prompt('What is your favorite color?');
 console.log('user entered' + userinput);

 alert(' Great ' + userinput + ' Is my favorite color too');

 let priceperday=3

 let brotherbear = prompt('How many days are you renting brother bear?');
 console.log('user entered'+ brotherbear);

 alert('You will be renting brother bear for ' + brotherbear + ' days');

 let littlemermaid = prompt('How many days are you renting little mermaid?');
 console.log('user entered'+ littlemermaid);

  alert('You will be renting brother bear for ' + littlemermaid+ ' days');

  let hercules = prompt('How many days are you renting hercules?');
  console.log('user entered'+ hercules);

  alert('You will be renting brother bear for ' + hercules + ' days');

  alert('Your total will be' + (hercules + littlemermaid + brotherbear ) * priceperday);

 let google=400
 let amazon=380
 let facebook=350

 let googlehours= prompt('How many hours did you work at google this week?');
 console.log('User entered ' + googlehours);
 alert('Your total pay for google will be ' + googlehours * google);

 let amazonhours= prompt('How many hours did you work at amazon this week?');
 console.log('User entered ' + amazonhours);

 alert('Your total pay for amazon will be '+ amazonhours * amazon);

 let facebookhours= prompt('How many hours did you work at amazon this week?');
console.log('User entered ' + facebookhours);

alert('Your total pay for facebook will be '+ facebookhours * facebook);

 alert('In total your pay from all companies will be' + (facebookhours * facebook+ googlehours * google + amazon * amazonhours) );


let scheduleconflict = confirm('is there a schedule conflict');
let classfull= confirm('is the class full');
alert(!scheduleconflict&&!classfull);

let productitems= prompt('How many items are in your cart');
console.log('user entered ' + productitems);

let expirationdate= confirm('is the expiration date before february 24th');
let premiummember=confirm('are you a premium number');
alert(productitems>2&&expirationdate)||premiummember;











