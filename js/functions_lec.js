"use strict"
 let userDay= prompt('Hows your day going');

alert('Im having a ' + userDay + ' day too ');

function callUserDay(){
    console.log(userDay)
}
function whatshouldiwear() {
    let tempature = prompt('what is the temp today');
    if (tempature < 50) {
        return 'You should wear a jacket today';
    }
}



//-----------function scoping--------------