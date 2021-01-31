let priceRange = [
    {tooltip: "Até R$ 700", minimum: 0, maximum: 700},
    {tooltip: "De R$ 700 até 1000", minimum: 700, maximum: 1000},
    {tooltip: "De R$ 1000 ou mais", minimum: 1000, maximum: 9999999},
];

function createPriceRange(tooltip, minimum, maximum) {
    return {
        tooltip,
        minimum,
        maximum,
    }
}

let range = [
    createPriceRange("a", 1, 100),
]
