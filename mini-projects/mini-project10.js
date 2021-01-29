showPrimeNumbers(15);

function showPrimeNumbers(limit) {
    for (let firstIndex = 1; firstIndex <= limit; firstIndex++) {
        let count = 0;
        for (let secondIndex = 1; secondIndex <= firstIndex; secondIndex++) {
            if (firstIndex % secondIndex == 0) {
                count += 1;
            }
        }
        if (count < 3) {
            console.log(firstIndex);
        }
    }
}
