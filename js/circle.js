(function(){
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

    getArea: function area() {
        // TODO: complete this method
        // hint: area = pi * radius^2
        return (Math.PI * (this.radius * this.radius))

    },
        logInfo: function rounding(obj) {
            // TODO: complete this method.
            if (obj!== parseInt(obj)) {
                return parseInt(obj)
            } else
                console.log("Area of a circle with radius: " + this.radius + ", is:" + circle.getArea(Math.PI,this.radius))
        }
    };
    // log info about the circle
    console.log("Raw circle information");

    console.log(circle.radius)

    console.log("Circle information rounded to the nearest whole number");
   circle.getArea(Math.PI,circle.radius)

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();