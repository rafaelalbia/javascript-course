showAsterisk(5);

function showAsterisk(number) {
    for (let index = 1; index <= number; index++) {
        let result = "";
        for (let amount = 1; amount <= index; amount++) {
            result += "*"
        }
        console.log(result);
    }
}
