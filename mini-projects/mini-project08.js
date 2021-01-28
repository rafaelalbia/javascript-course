const array = [70, 70, 80];

console.log(studentAverage(array));

function studentAverage(grades) {
    let result = 0;
    let index = 0;
    let average = 0;
    
    for (let grade of grades) {
        result += grade;
        index++;
    }

    average = result / index;

    if (average == 100 || average >= 90) {
        return "A";
    } else if (average == 89 || average >= 80) {
        return "B";
    } else if (average == 79 || average >= 70) {
        return "C";
    } else if (average == 69 || average >= 60) {
        return "D";
    } else if (average == 59 || average >= 50) {
        return "C";
    } else {
        return "Invalid";
    }
}
