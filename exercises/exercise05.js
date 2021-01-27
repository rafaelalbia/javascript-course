// Arithmetic operators

let number = 10;

console.log(number + number);
console.log(number - number);
console.log(number * number);
console.log(number / number);
console.log(number ** number);
console.log(++number);
console.log(--number)

// Assignment operators
let priceKeyboard = 100;

console.log(priceKeyboard);
priceKeyboard += priceKeyboard;
console.log(priceKeyboard);
priceKeyboard -= priceKeyboard;
console.log(priceKeyboard);
priceKeyboard *= priceKeyboard;
console.log(priceKeyboard);
priceKeyboard /= priceKeyboard;
console.log(priceKeyboard);

// Equality operators
console.log(1 === 1);
console.log("1" === 1);
console.log("1" == 1);

// Ternary operators
let costumer = 100;
let type = costumer >= 100 ? "premium": "common";

console.log(type);

// Falsy: Undefined; null; 0; false; ''; NaN.
