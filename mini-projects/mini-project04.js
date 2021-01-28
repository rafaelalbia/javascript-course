let number = 71;
speedVerify(number);

function speedVerify(speed) {
    const speed = Math.floor(speed);
    if (speed > 70) {
        const points = Math.floor(((speed - 70) / 5));
        if (points > 12) {
            console.log("Suspended")
        } else {
            console.log("Points: " + points)
        }
    } else if (typeof number !== "number") {
        console.log("Not a number");
    } else {
        console.log("Ok")
    }
}
