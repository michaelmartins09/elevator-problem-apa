const plotLib = require('nodeplotlib')
const { lab } = require("./execute_lab")

const generateGraph = () => {
  const { experimento1, experimento2, experimento3 } = lab

  console.log(JSON.stringify(lab, null, 4))

  const data = [
    {
      x: [experimento1.time, experimento2.time, experimento3.time], 
      y: [experimento1.solutions, experimento2.solutions, experimento3.solutions],
      type: 'bar',
      name: 'Relação: Soluções x Tempo'
    },
  ];
  
  return data
}

plotLib.plot(generateGraph());