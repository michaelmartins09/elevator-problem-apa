// Import CLI libraries
const inquirer = require('inquirer')
const chalkPipe = require('chalk-pipe')

// Import class and constants
const options = require('./constants/options')
const Elevator = require('./class/elevator')

function init() {
	process.stdout.write('\u001b[2J\u001b[0;0H')
	console.log('--------------------------------------------------------------')
	console.log(chalkPipe('#FFD700.bold')('Problema do Elevador - Programação dinâmica'))
	console.log(chalkPipe('white')('(Para sair pressione CTRL + C)'))
	menu()
}

function menu() {
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

function debug(solutions) {
	if (process.argv[2] && process.argv[2].toLowerCase() == 'debug') {
		console.log()
		console.log(chalkPipe('yellow')('== Soluções =='))
		console.log(solutions)
		console.log()
	}
}

init()
