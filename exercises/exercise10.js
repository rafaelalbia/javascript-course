// Constructor function
function Cell(brand, screenSize, bateryCapacity) {
    this.brand,
    this.screenSize,
    this.bateryCapacity,
    this.turnOn = function() {
        console.log("Making a call...")
    }
}

const firstCell = new Cell("ASUS", 5.5, 5000);
firstCell.turnOn();
