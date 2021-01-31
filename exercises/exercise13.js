const number = [1, 2, 3, 1, 4];

// Start
number.unshift(0);
console.log(number);

// Middle
number.splice(1, 0, "a");
console.log(number);

// Final
number.push(5);
console.log(number);

// Find a value
console.log(number.indexOf(2));
console.log(number.lastIndexOf(1));
console.log(number.includes("a"));
