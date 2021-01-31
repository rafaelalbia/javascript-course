const numbers = [1, 2, 3, 4, 5, 6];

for (let number of numbers) {
    console.log(number);
}

// Foreach
numbers.forEach((number, index) => console.log(number, index));

let phrase = "Hello! My name is Rafael";
phrase = phrase.split(" ");
console.log(phrase);
const result = phrase.join(".");
console.log(result);
