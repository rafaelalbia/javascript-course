let colorA = "Blue";
let colorB = "Red";

console.log(colorA);
console.log(colorB);

function exchangingColor(a, b) {
    colorA = b;
    colorB = a;
}

exchangingColor(colorA, colorB);
console.log(colorA);
console.log(colorB);
