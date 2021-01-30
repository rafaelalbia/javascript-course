function Address(road, city, CEP) {
    this.road = road;
    this.city = city;
    this.CEP = CEP;
}

const firstAddress = new Address("a", "b", "c");
const secondAddress = new Address("a", "b", "c");
const thirdAddress = firstAddress;

function theyAreEqual(address1, address2) {
    for (let key in address1) {
        if (address1[key] != address2[key]) {
            return false;
        }
    }
    return true;
}

function haveEqualMemoryAddress(address1, address2) {
    if (address1 === address2) {
        return true;
    }
    return false;
}

console.log(theyAreEqual(firstAddress, secondAddress));
console.log(haveEqualMemoryAddress(firstAddress, thirdAddress));
