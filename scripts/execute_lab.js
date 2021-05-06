const { algorithm } = require("../src/experimental")

// Numero de entradas (execuções)
const testCasesSize = 10
// Numero de pessoas que querem subir no elevador
const peoplesSize = 9
const testCaseList = generateTestCases(testCasesSize)

/**
 * Função responsável por gerar cada caso de teste 
 * de acordo com o tamanho de casos de teste informado 
 * na variável testCasesSize
 */
function generateTestCases(caseSize = 1) {
    let array = Array.from({length: caseSize}, (_, index) => Math.round(20 + index * 2))

    let cases = []
    for (const value of array) {
        const caseTest = {
            lifts: value,
            stops: generateRandomStops(value), 
            quantityStops: 6
        }
        cases.push(caseTest)
    }
    return cases
}

/**
 * Função responsável por gerar as paradas de cada pessoa que
 * deseja subir no elevador, as paradas são geradas de forma randômica
 * de acordo com o número de pessoas e o número de andares.
 */
function generateRandomStops(length) {
    var result = [];
    for ( var i = 0; i < peoplesSize; i++ ) {
        const randomFloor = Math.floor(Math.random() * length) + 1;
        result.push(randomFloor.toString())
    }
    return result.join(',');
}

module.exports = { "lab": algorithm(testCaseList, true, testCasesSize) }