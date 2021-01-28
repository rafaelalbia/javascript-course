let firstValue = 8;
let secondValue = 8;

function maximumNumber (number1, number2) {
    if (firstValue === secondValue) {
        console.log(firstValue + " = " + secondValue);
    } else if (firstValue > secondValue) {
        return firstValue;
    } else {
        return secondValue;
    }
}

result = maximumNumber(firstValue, firstValue);
console.log(result);
