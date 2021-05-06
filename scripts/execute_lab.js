const { algorithm } = require("../src/experimental")

const testCasesSize = 10
const peoplesSize = 7
const testCaseList = generateTestCases(testCasesSize)

function generateTestCases(caseSize = 1) {
    let array = Array.from({length: caseSize}, (_, index) => Math.round(15 + index * 2))

    let cases = []
    for (const value of array) {
        const caseTest = {
            charge: value,
            stops: generateRandomStops(value), 
            quantityStops: 5
        }
        cases.push(caseTest)
    }
    return cases
}//Carga de dados:  { charge: 30, stops: '12,9,15,12,15,6,14', quantityStops: 1 }

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