// Import CLI libraries
const inquirer = require('inquirer')
const chalkPipe = require('chalk-pipe')
const { performance } = require('perf_hooks');

// Import class and constants
const options = require('./constants/options')
const Elevator = require('./class/elevator')

module.exports = { 
	'algorithm': (data, testBruteForce = false, caseSize) => {
		process.stdout.write('\u001b[2J\u001b[0;0H')
		let result = {}
		let resultBruteForce = {}
		let response = {}
		let index = 1

		for (const problem of data) {
			
			console.log('--------------------------------------------------------------')
			console.log('Carga de dados: ', problem)
			console.log('--------------------------------------------------------------')
			
			const { charge, stops, quantityStops } = problem
			
			console.log()
			let elevator = new Elevator(charge, stops.split(','))
			let solutions = []
			const startTime = performance.now()
			for (let i = 1; i <= quantityStops; i++) {
				elevator.execute(i, solutions)
			}
			const endTime = performance.now()
			console.log("TIME: ", endTime - startTime)

			solutions.sort((a, b) => b.cost - a.cost || a.floor.length - b.floor.length)
			//console.log(chalkPipe('lightblue')(`#️⃣  Possíveis soluções: ${solutions.length}`))
			debug(solutions)
			// console.log(chalkPipe('yellow')(`✅ Melhor combinação de andares para paradas: ${solutions[0].floor}`))
			// console.log(chalkPipe('yellow')(`👥 Quantidade de pessoas para subir ou descer as escadas: ${elevator.qntTotalPersons - solutions[0].cost} de ${elevator.qntTotalPersons}`))
			console.log()


			const chargeProblem = {
				//solutions: solutions.length,
				time: (endTime-startTime).toPrecision(5),
				charge
			}

			result[`experimento${index}`] = chargeProblem
			index++
			// menu()
		}
		
		index = 1
		if (testBruteForce) {
			for (const problem of data) {
			
				console.log('--------------------------------------------------------------')
				console.log('Carga de dados: ', problem)
				console.log('--------------------------------------------------------------')
				
				const { charge, stops, quantityStops } = problem
				
				console.log()
				//console.time('⌛️ Tempo de execução')
				let elevator = new Elevator(charge, stops.split(','))
				let solutions = []
				const startTime = performance.now()
				for (let i = 1; i <= quantityStops; i++) {
					elevator.bruteForce(i, solutions)
				}
				const endTime = performance.now()
				console.log("TIME: ", endTime - startTime)
	
				solutions.sort((a, b) => b.cost - a.cost || a.floor.length - b.floor.length)
				//console.log(chalkPipe('lightblue')(`#️⃣  Possíveis soluções: ${solutions.length}`))
				debug(solutions)
				// console.log(chalkPipe('yellow')(`✅ Melhor combinação de andares para paradas: ${solutions[0].floor}`))
				// console.log(chalkPipe('yellow')(`👥 Quantidade de pessoas para subir ou descer as escadas: ${elevator.qntTotalPersons - solutions[0].cost} de ${elevator.qntTotalPersons}`))
				console.log()
	
	
				const chargeProblem = {
					//solutions: solutions.length,
					time: (endTime-startTime).toPrecision(4),
					charge
				}
	
				resultBruteForce[`experimento${index}`] = chargeProblem
				index++
				// menu()
			}
		}

		response["bruteForce"] = resultBruteForce
		response["progDynamic"] = result
		response["caseSize"] = caseSize

		console.log('--------------------------------------------------------------')
		console.log(response)
		console.log('--------------------------------------------------------------')
		return response
	}
	
}

const debug = (solutions) => {
	if (process.argv[2] && process.argv[2].toLowerCase() == 'debug') {
		console.log()
		console.log(chalkPipe('yellow')('== Soluções =='))
		console.log(solutions)
		console.log()
	}
}