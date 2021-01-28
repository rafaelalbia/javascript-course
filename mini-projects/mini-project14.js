showType(5);

function showType(number) {
    for (let index = 0; index <= number; index++) {
        if (index % 2 == 0) {
            console.log(index, "Even");
        } else {
            console.log(index, "Odd");
        }
    }
}
