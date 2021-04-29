const { algorithm } = require("../src/index")

const elevators = [
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

module.exports = { "lab": algorithm(elevators, true) }