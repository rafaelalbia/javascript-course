const mouse = {
    color: "black",
    brand: "Fortrek"
}

mouse.dpi = 2000;
mouse.changeDPI = function() {
    console.log("Change DPI");
}
delete mouse.dpi;
delete mouse.changeDPI;
console.log(mouse);

const newMouse = Object.assign({
    led: "red",
}, mouse);

console.log(newMouse);

const otherNewMouse = {...newMouse};
console.log(otherNewMouse);
