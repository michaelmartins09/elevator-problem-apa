const { algorithm } = require("../src/experimental")

const casesSize = 30
const elevators = generateTestCases(casesSize)

function generateTestCases(caseSize = 1) {
    let array = Array.from({length: caseSize}, (_, index) => 25 + index * 5)
    console.log(array)
    let cases = []
    for (const value of array) {
        const caseTest = {
            charge: value,
            stops: "1,2,5,7,9",
            quantityStops: 3
        }
        cases.push(caseTest)
    }
    return cases
}

module.exports = { "lab": algorithm(elevators, true, casesSize) }