const array = [70, 70, 80];

console.log(studentAverage(array));

function studentAverage(grades) {
    let result = average(grades);

    if (result < 0) return "Invalid"
    if (result < 59) return "F";
    if (result < 69) return "D";
    if (result < 79) return "C";
    if (result < 89) return "B";
    return "A";
}

function average(array) {
    let result = 0;
    let index = 0;

    for (let value of array) {
        result += value;
        index++
    }

    return result / index;
}
