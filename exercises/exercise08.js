// For loop
for(let i = 0; i < 5; i++) {
    console.log("I'm learning!", i);
}

// While loop
i = 5;

while(i >= 1) {
    console.log(i--);
}

// Do-while
i = 5;

do {
    console.log("Typing...", i--)
} while (i != 0);

// For-in
const person = {
    name: "Rafael",
    age: 19
};
const colors = ["Red", "Blue", "Green"];

for(let key in person) {
    console.log(key, person['name']);
}

for (let index in colors) {
    console.log(colors[index]);
}

// For-of
