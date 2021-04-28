const plotLib = require('nodeplotlib')
const { lab } = require("./execute_lab")

const generateGraph = () => {
  const {
    experimento1,
    experimento2,
  } = lab

  const data = [
    {
      y: [experimento1.time, experimento2.time], 
      x: [experimento1.charge, experimento2.charge],
      type: 'line',
      name: 'Relação: Tempo x Carga'
    },
    {
      y: [experimento1.time, experimento2.time], 
      x: [experimento1.charge, experimento2.charge],
      type: 'line',
      name: 'Relação: Tempo x Carga'
    },
  ];
  
  return data
}

plotLib.plot(generateGraph());