﻿const button = document.querySelector('button') as HTMLButtonElement;
const input = document.querySelector('num1') as HTMLInputElement;
const input2 = document.querySelector('num2') as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input.value, +input2.value));
});
