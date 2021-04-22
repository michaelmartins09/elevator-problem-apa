const { init } = require("../src/index")

const data = [
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

module.exports = { "lab": init(data) }