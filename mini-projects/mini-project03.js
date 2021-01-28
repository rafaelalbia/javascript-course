let choice = true;
const result = fizzBuzz(choice);
console.log(result);

function fizzBuzz (number) {
    if (typeof choice !== "number") {
        console.log("Not a number");
    } else if (number >= 3 && number % 3 === 0) {
        console.log("Fizz");
    } else if (number >= 5 && number % 5 === 0) {
        console.log("Buzz");
    } else if (number >= 15 && number % 15 === 15) {
        console.log("FizzBuzz");
    } else {
        console.log(number);
    }
}
