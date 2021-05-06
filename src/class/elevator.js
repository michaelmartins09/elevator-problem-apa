const chalkPipe = require('chalk-pipe')

/**
 * Classe elevator
 * @property {number} qntTotalPersons Quantidade total de pessoas
 * @property {Array<number>} floors Andares indicados para parar
 */
class Elevator {
	/**
	 * Inicializa o elevador com o tamanho total do prédio e
	 *
	 * @param {number} posFinal Fim do indice dos andares
	 * @param {Array<number>} floors Andares indicados para parar
	 */
	constructor(posFinal, stops) {
		this.qntTotalPersons = 0
		this.floors = this.generateFloors(posFinal, stops.sort())
	}

	/**
	 * Percorre todas as combinações de tamanho n
	 * em uma matriz de tamanho p
	 *
	 * @param  {number} qntStops Tamanho do conjunto de combinações
	 * @param  {Array} solution Vetor das soluções encontradas
	 * @param  {number} start [start = 0] Inicio do indice dos andares
	 * @param  {number} index [index = 0] Indice atual do vetor de paradas
	 * @param  {Array} stops [stops = Array] Vetor temporario de combinações
	 */
	execute(qntStops, solution, start = 0, index = 0, stops = [], computed = []) {

		// Solution pode vir com valores
		if (!computed.includes(solution)){
			if (index == qntStops) {
				return this.calculeFloor(qntStops, stops, solution)
			}
	
			// Substitui o indice por todos os elementos possíveis
			for (let i = start; i <= this.floors.length; i++) {
				// Esta condição garante que um elemento adicionado na lista de paradas
				// irá realizar uma combinação única com o resto dos elemento
				// e ainda irá realizar somente nas posições restantes
				stops[index] = this.floors[i]
				if (this.floors.length - i >= qntStops - index && stops[index].qntPessoas != 0) {
					this.execute(qntStops, solution, i + 1, index + 1, stops, computed)
				}
			}
		} else {
			this.execute(qntStops, solution, i + 1, index + 1, stops, computed)
		}

		// A combinação atual está pronta para ser calculada
	}

	/**
	 * Percorre todas as combinações de tamanho n
	 * em uma matriz de tamanho p
	 *
	 * @param  {number} qntStops Tamanho do conjunto de combinações
	 * @param  {Array} solution Vetor das soluções encontradas
	 * @param  {number} start [start = 0] Inicio do indice dos andares
	 * @param  {number} index [index = 0] Indice atual do vetor de paradas
	 * @param  {Array} stops [stops = Array] Vetor temporario de combinações
	 */
	 bruteForce(qntStops, solution, start = 0, index = 0, stops = []) {
		// A combinação atual está pronta para ser calculada
		if (index == qntStops) {
			return this.calculeFloor(qntStops, stops, solution, true)
		}

		// Substitui o indice por todos os elementos possíveis
		for (let i = start; i <= this.floors.length; i++) {
			// Esta condição garante que um elemento adicionado na lista de paradas
			// irá realizar uma combinação única com o resto dos elemento
			// e ainda irá realizar somente nas posições restantes
			if (this.floors.length - i >= qntStops - index) {
				stops[index] = this.floors[i]
				this.bruteForce(qntStops, solution, i + 1, index + 1, stops)
			}
		}
	}

	/**
	 * Calcula quantas pessoas irão descer naquela combinação de andares
	 *
	 * @param {number} qntStops Tamanho do conjunto de combinações
	 * @param {number} stops Vetor de combinações
	 * @param {Array} solution Vetor de soluções encontradas
	 *
	 */
	calculeFloor(qntStops, stops, solution, byBruteForce = false) {
		let array = []
		let cost = 0
		for (let i = 0; i < qntStops; i++) {
			cost += stops[i].qntPersons
			array.push(stops[i].floor)
		}
		const data = { floor: array, cost: cost }
		// if (!byBruteForce) {
		// 	if (!solution.includes(data)) {
		solution.push(data)
		// 	}
		// }else{
		// 	solution.push(data)
		// }
		//console.log("-- debug solutions from calculateFloor --> ", JSON.stringify(data, null, 4))
	}

	/**
	 * Calcula quantas pessoas irão descer no conjunto de andares
	 * @param {number} qntFloors Tamanho do conjunto de combinações
	 * @param {Array} stops Vetor temporário de combinações
	 */
	generateFloors(qntFloors, stops) {
		let floors = []
		let floorsRemoveds = []

		for (let i = 1; i <= qntFloors; i++) {
			floors.push({
				floor: i,
				qntPersons: 0
			})
		}

		stops.forEach(floor => {
			if (floor - 1 >= floors.length) {
				if (!floorsRemoveds.includes(floor)) {
					floorsRemoveds.push(floor)
				}
				return
			}

			floors[floor - 1].qntPersons++
			this.qntTotalPersons++
		})

		if (floorsRemoveds.length > 0) {
			console.log(chalkPipe('pink')(`- Um ou mais andares foram removidos (${floorsRemoveds}), pois excede(m) o limite previamente informado;`))
		}

		return floors
	}
}

module.exports = Elevator