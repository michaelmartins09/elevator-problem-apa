// Import CLI libraries
const inquirer = require('inquirer')
const chalkPipe = require('chalk-pipe')
const { performance } = require('perf_hooks');


// Import class and constants
const options = require('./constants/options')
const Elevator = require('./class/elevator')

const init = () => {
	process.stdout.write('\u001b[2J\u001b[0;0H')
	console.log('--------------------------------------------------------------')
	console.log(chalkPipe('#FFD700.bold')('Problema do Elevador - Programação dinâmica'))
	console.log(chalkPipe('white')('(Para sair pressione CTRL + C)'))
	menu()
}

const menu = () => {
	inquirer.prompt(options).then(option => {
		console.log()
		console.time('⌛️ Tempo de execução')
		let elevator = new Elevator(option.qntFloors, option.stops.split(','))
		let solutions = []
		// for (let index = 0; index < 2; index++) {
		var t0 = performance.now()
		for (let i = 1; i <= option.qntStops; i++) {
			elevator.execute(i, solutions)
		}
		var t1 = performance.now()
		console.log("Call to doSomething took " + (t1 - t0).toPrecision(3) + " milliseconds.")
		// }
		console.timeEnd('⌛️ Tempo de execução')

		solutions.sort((a, b) => b.cost - a.cost || a.floor.length - b.floor.length)
		console.log(chalkPipe('lightblue')(`#️⃣  Possíveis soluções: ${solutions.length}`))
		debug(solutions)
		console.log(chalkPipe('yellow')(`✅ Melhor combinação de andares para paradas: ${solutions[0].floor}`))
		console.log(chalkPipe('yellow')(`👥 Quantidade de pessoas para subir ou descer as escadas: ${elevator.qntTotalPersons - solutions[0].cost} de ${elevator.qntTotalPersons}`))
		console.log()
		console.log("=============== BRUTE FORCE")
		console.log()
		console.time('⌛️ Tempo de execução')
		elevator = new Elevator(option.qntFloors, option.stops.split(','))
		solutions = []
		// for (let index = 0; index < 2; index++) {
		var t2 = performance.now()
		for (let i = 1; i <= option.qntStops; i++) {
			elevator.bruteForce(i, solutions)
		}
		var t3 = performance.now()
		console.log("Call to doSomething took " + (t3 - t2).toPrecision(3) + " milliseconds.")
		// }
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

init()
/*
empo de execução: 1.928s
#️⃣  Possíveis soluções: 4739870
✅ Melhor combinação de andares para paradas: 7,15,20,39,49     
� Quantidade de pessoas para subir ou descer as escadas: 1 de 7

7,15,20,39,49,50,12
FORÇA BRUTA
⌛️ Tempo de execução: 1.662s
#️⃣  Possíveis soluções: 4739870
✅ Melhor combinação de andares para paradas: 7,12,15,20,39     
� Quantidade de pessoas para subir ou descer as escadas: 2 de 7

DINAMICA
⌛️ Tempo de execução: 1.742s
#️⃣  Possíveis soluções: 4739870
✅ Melhor combinação de andares para paradas: 7,12,15,20,39     
� Quantidade de pessoas para subir ou descer as escadas: 2 de 7

⌛️ Tempo de execução: 0.494ms  1,2,3,2,1,2,1
#️⃣  Possíveis soluções: 12
✅ Melhor combinação de andares para paradas: 1,2
� Quantidade de pessoas para subir ou descer as escadas: 1 de 7

*/


/* TESTE SEM O FOR COM 2 REPETIÇÕES

Prog Dinamica
⌛️ Tempo de execução: 0.34ms
#️⃣  Possíveis soluções: 6
✅ Melhor combinação de andares para paradas: 1,2


Força Bruta
⌛️ Tempo de execução: 0.282ms
#️⃣  Possíveis soluções: 6
✅ Melhor combinação de andares para paradas: 1,2


? Qual a quantidade de andares do prédio? 50
? Quais andares deseja parar? (Separe por vírgula, e.g. 13,14,14,15) 7,15,20,39,49,50,12
? Quantas paradas você deseja que o elevador faça: 5

Call to doSomething took 844 milliseconds.
⌛️ Tempo de execução: 845.286ms
#️⃣  Possíveis soluções: 2369935
✅ Melhor combinação de andares para paradas: 7,12,15,20,39     
� Quantidade de pessoas para subir ou descer as escadas: 2 de 7

=============== BRUTE FORCE

Call to doSomething took 995 milliseconds.
⌛️ Tempo de execução: 995.612ms
#️⃣  Possíveis soluções: 2369935
✅ Melhor combinação de andares para paradas: 7,12,15,20,39
� Quantidade de pessoas para subir ou descer as escadas: 2 de 7
*/