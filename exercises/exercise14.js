const mark = [
    {id: 1, name: "a"},
    {id: 2, name: "b"},
]

const show = mark.find(function(mark) {
    return mark.name === "a";
});
console.log(show);

console.log(mark.find(mark => {return mark.name === "a"}));
