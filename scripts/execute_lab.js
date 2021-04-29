const { algorithm } = require("../src/index")

const elevators = [
    {
        charge: 25,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 27,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 29,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 31,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 33,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 35,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 37,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 39,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 41,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 43,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 45,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 47,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 49,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 51,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 53,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 55,
        stops: "1,2,5,7,9",
        quantityStops: 3
    }, {
        charge: 57,
        stops: "1,2,5,7,9",
        quantityStops: 3
    }, {
        charge: 59,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 61,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 63,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 65,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 67,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 69,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 71,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 73,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 75,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 79,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 81,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 83,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 85,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
]

module.exports = { "lab": algorithm(elevators, true) }