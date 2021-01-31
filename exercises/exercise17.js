const first = [1, 2, 3];
const second = [4, 5, 6];

// Combined
const combined = first.concat(second);
console.log(combined);

// const divided = combined.slice(1, 3); 
// const divided = combined.slice(1);
// console.log(divided);

// Spread
const cloned = [...first, "%", ...second];
console.log(cloned);
