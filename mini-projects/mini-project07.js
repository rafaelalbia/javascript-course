sum(10);

function sum(limit) {
    let result = 0;

    for (let index = 0; index <= limit; index++) {
        if (index % 3 == 0 || index % 5 == 0) {
            result += index;
        }
    }

    console.log(result);
}
