const { init } = require("../src/index")

const elevatorAlg = [
    {
        charge: 25,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 50,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 100,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
]

const elevatorNormal = [
    {
        charge: 25,
        stops: generateStops(25),
        quantityStops: 25
    },
    {
        charge: 50,
        stops: generateStops(50),
        quantityStops: 50
    },
    {
        charge: 100,
        stops: generateStops(100),
        quantityStops: 100
    },
]

function generateStops(size) {
    let arr = []
    for (let index = 0; index < size; index++) {
        arr.push(index + 1);
    }
    return arr.join(',')
}

module.exports = { "lab": init(elevatorAlg) }