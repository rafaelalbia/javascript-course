const numbers = [5, 6, 4, 4, 1, 4, 6, 1];
const others = numbers;
console.log(numbers);
console.log(others);

numbers.length = 0; // numbers.splice(0, numbers.length);
console.log(numbers);
console.log(others);
