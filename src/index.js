// Import CLI libraries
const inquirer = require('inquirer')
const chalkPipe = require('chalk-pipe')
const now = require('performance-now')


// Import class and constants
const options = require('./constants/options')
const Elevator = require('./class/elevator')

module.exports = { 
	'init': (data) => {
		process.stdout.write('\u001b[2J\u001b[0;0H')
		let result = {}
		for (const problem of data) {
			const startTime = now()

			console.log('--------------------------------------------------------------')
			console.log('Carga de dados: ', problem)
			console.log('--------------------------------------------------------------')

			const { charge, stops, quantityStops } = problem

			console.log()
			console.time('⌛️ Tempo de execução')
			let elevator = new Elevator(charge, stops.split(','))
			let solutions = []
			for (let i = 1; i <= quantityStops; i++) {
				eval(`elevator.execute(i, solutions)`)
			}
			console.timeEnd('⌛️ Tempo de execução')
			const endTime = now()

			solutions.sort((a, b) => b.cost - a.cost || a.floor.length - b.floor.length)
			console.log(chalkPipe('lightblue')(`#️⃣  Possíveis soluções: ${solutions.length}`))
			debug(solutions)
			console.log(chalkPipe('yellow')(`✅ Melhor combinação de andares para paradas: ${solutions[0].floor}`))
			console.log(chalkPipe('yellow')(`👥 Quantidade de pessoas para subir ou descer as escadas: ${elevator.qntTotalPersons - solutions[0].cost} de ${elevator.qntTotalPersons}`))
			console.log()


			const chargeProblem = {
				solutions: solutions.length,
				time: (endTime-startTime).toFixed(2)
			}

			result[`charge${charge}`] = chargeProblem
			// menu()
		}

		console.log('--------------------------------------------------------------')
		console.log(result)
		console.log('--------------------------------------------------------------')
		return result
	}
}

const menu = () => {
	inquirer.prompt(options).then(option => {
		console.log()
		console.time('⌛️ Tempo de execução')
		let elevator = new Elevator(option.qntFloors, option.stops.split(','))
		let solutions = []
		for (let i = 1; i <= option.qntStops; i++) {
			eval(`elevator.execute(i, solutions)`)
		}
		console.timeEnd('⌛️ Tempo de execução')

		solutions.sort((a, b) => b.cost - a.cost || a.floor.length - b.floor.length)
		console.log(chalkPipe('lightblue')(`#️⃣  Possíveis soluções: ${solutions.length}`))
		debug(solutions)
		console.log(chalkPipe('yellow')(`✅ Melhor combinação de andares para paradas: ${solutions[0].floor}`))
		console.log(chalkPipe('yellow')(`👥 Quantidade de pessoas para subir ou descer as escadas: ${elevator.qntTotalPersons - solutions[0].cost} de ${elevator.qntTotalPersons}`))
		console.log()
	})
}

const debug = (solutions) => {
	if (process.argv[2] && process.argv[2].toLowerCase() == 'debug') {
		console.log()
		console.log(chalkPipe('yellow')('== Soluções =='))
		console.log(solutions)
		console.log()
	}
}
