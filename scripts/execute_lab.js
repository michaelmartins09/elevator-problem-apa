const { algorithm } = require("../src/experimental")

const testCasesSize = 8
const peoplesSize = 6
const testCaseList = generateTestCases(testCasesSize)

function generateTestCases(caseSize = 1) {
    let array = Array.from({length: caseSize}, (_, index) => 2 + index * 5)
    //console.log(array)
    let cases = []
    for (const value of array) {
        const caseTest = {
            charge: value,
            stops: generateRandomStops(value), 
            quantityStops: Math.floor(Math.random() * 10) + 1
        }
        cases.push(caseTest)
    }
    return cases
}

function generateRandomStops(length) {
    var result = [];
    for ( var i = 0; i < peoplesSize; i++ ) {
        const randomFloor = Math.floor(Math.random() * length) + 1;
        result.push(randomFloor.toString())
    }
    return result.join(',');
}

module.exports = { "lab": algorithm(testCaseList, true, testCasesSize) }

//console.log(testCaseList)