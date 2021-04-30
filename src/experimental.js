// Import CLI libraries
const inquirer = require('inquirer')
const chalkPipe = require('chalk-pipe')
const now = require('performance-now')

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
		
		if (testBruteForce) {
			for (const problem of data) {
			
				console.log('--------------------------------------------------------------')
				console.log('Carga de dados: ', problem)
				console.log('--------------------------------------------------------------')
				
				const { charge, stops, quantityStops } = problem
				
				console.log()
				const startTime = now()
				console.time('⌛️ Tempo de execução')
				let elevator = new Elevator(charge, stops.split(','))
				let solutions = []
				for (let i = 1; i <= quantityStops; i++) {
					eval(`elevator.testBruteForce(i, solutions)`)
				}
				const endTime = now()
				console.timeEnd('⌛️ Tempo de execução')
	
				solutions.sort((a, b) => b.cost - a.cost || a.floor.length - b.floor.length)
				console.log(chalkPipe('lightblue')(`#️⃣  Possíveis soluções: ${solutions.length}`))
				debug(solutions)
				console.log(chalkPipe('yellow')(`✅ Melhor combinação de andares para paradas: ${solutions[0].floor}`))
				console.log(chalkPipe('yellow')(`👥 Quantidade de pessoas para subir ou descer as escadas: ${elevator.qntTotalPersons - solutions[0].cost} de ${elevator.qntTotalPersons}`))
				console.log()
	
	
				const chargeProblem = {
					solutions: solutions.length,
					time: (endTime-startTime).toFixed(2),
					charge
				}
	
				resultBruteForce[`experimento${index}`] = chargeProblem
				index++
				// menu()
			}
		}
		index = 1
		for (const problem of data) {
			
			console.log('--------------------------------------------------------------')
			console.log('Carga de dados: ', problem)
			console.log('--------------------------------------------------------------')
			
			const { charge, stops, quantityStops } = problem
			
			console.log()
			const startTime = now()
			console.time('⌛️ Tempo de execução')
			let elevator = new Elevator(charge, stops.split(','))
			let solutions = []
			for (let i = 1; i <= quantityStops; i++) {
				eval(`elevator.execute(i, solutions)`)
			}
			const endTime = now()
			console.timeEnd('⌛️ Tempo de execução')

			solutions.sort((a, b) => b.cost - a.cost || a.floor.length - b.floor.length)
			console.log(chalkPipe('lightblue')(`#️⃣  Possíveis soluções: ${solutions.length}`))
			debug(solutions)
			console.log(chalkPipe('yellow')(`✅ Melhor combinação de andares para paradas: ${solutions[0].floor}`))
			console.log(chalkPipe('yellow')(`👥 Quantidade de pessoas para subir ou descer as escadas: ${elevator.qntTotalPersons - solutions[0].cost} de ${elevator.qntTotalPersons}`))
			console.log()


			const chargeProblem = {
				solutions: solutions.length,
				time: (endTime-startTime).toFixed(2),
				charge
			}

			result[`experimento${index}`] = chargeProblem
			index++
			// menu()
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