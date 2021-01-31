const number = [1, 2, 3];

// Start
number.unshift(0);
console.log(number);

// Middle
number.splice(1, 0, "a");
console.log(number);

// Final
number.push(5);
console.log(number);
