"use strict";
// String literal union types
var coffeeSize;
coffeeSize = 'medium';
coffeeSize = 'large';
// coffeeSize = "small" // wrong
// Union Type
var stringOrNumber;
stringOrNumber = 255;
stringOrNumber = 'max';
function dbl(value) {
    if (typeof value === 'string') {
        return parseInt(value) * 2;
    }
    return value * 2;
}
var valueFromDOM;
function show(value) {
    return value;
}
show(valueFromDOM);
