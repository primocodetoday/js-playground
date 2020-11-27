// String literal union types
let coffeeSize: 'medium' | 'large';
coffeeSize = 'medium';
coffeeSize = 'large';
// coffeeSize = "small" // wrong

// Union Type
let stringOrNumber: string | number;
stringOrNumber = 255;
stringOrNumber = 'max';

type doubleAnything = string | number;

function dbl(value: doubleAnything): number {
  if (typeof value === 'string') {
    return parseInt(value) * 2;
  }
  return value * 2;
}

// Unknown values
type maybeValue = string | undefined;
let valueFromDOM;

function show(value: maybeValue) {
  return value;
}

show(valueFromDOM);
