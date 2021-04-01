module.exports = [
	{
		type: 'input',
		name: 'qntFloors',
		message: 'Qual a quantidade de andares do prédio?',
		default: '5',
		validate: value => (value.match('^[1-9]+[0-9\\S]*$') ? true : 'Por favor, informe um valor numerico positivo.')
	},
	{
		type: 'input',
		name: 'stops',
		default: '2,4,5,5',
		message: 'Quais andares deseja parar? (Separe por vírgula, e.g. 13,14,14,15)',
		validate: value => (value.match(`^[1-9]+[0-9,\\S]*$`) ? true : 'Por favor, informe somente andares numericos positivos.')
	},
	{
		type: 'input',
		name: 'qntStops',
		default: '1',
		message: 'Quantas paradas você deseja que o elevador faça:',
		validate: value => (value.match('^[1-9]+[0-9\\S]*$') ? true : 'Por favor, informe um valor numerico.')
	},
]
