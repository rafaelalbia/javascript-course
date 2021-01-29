// Factory function
function createCell(brand, screenSize, bateryCapacity) {
    return {
        brand,
        screenSize,
        bateryCapacity,
        turnOn() {
            console.log("Making a call...")
        }
    }
}

const cell1 = createCell("Zenfone", 5.5, 6000);
console.log(cell1);
