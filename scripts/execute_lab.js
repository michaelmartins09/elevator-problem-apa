const { init } = require("../src/index")

const data = [
    {
        charge: 10,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 20,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
    {
        charge: 30,
        stops: "1,2,5,7,9",
        quantityStops: 3
    },
]

module.exports = { "lab": init(data) }