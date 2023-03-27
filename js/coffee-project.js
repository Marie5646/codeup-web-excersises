"use strict"

function renderCoffee(coffee) {
    var html = '<div id="coffees">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';

    return html;
}

