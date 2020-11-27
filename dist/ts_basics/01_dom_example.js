"use strict";
var button = document.querySelector('button');
var input = document.querySelector('num1');
var input2 = document.querySelector('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input.value, +input2.value));
});
