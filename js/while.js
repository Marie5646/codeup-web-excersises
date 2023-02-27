'use strict';
let i = 1;
while(i < 65536){
    i *= 2
        console.log(i)
}

let allcones =Math.floor(Math.random() *50) + 50
let soldcones;
do{
    soldcones= Math.floor(Math.random() * 5) + 1
 if(allcones < soldcones){
     console.log('I cannot sell ' + soldcones + 'cones I only have '+ allcones);
     continue;
   }
    allcones -= soldcones;
    console.log(soldcones + ' cones sold')
    }  while(allcones > 0) //continues the loop
    console.log('Yay!, I sold all the cones');
