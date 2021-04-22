const plotLib = require('nodeplotlib')
const { lab } = require("./execute_lab")

const generateGraph = () => {
  const { charge10, charge20, charge30 } = lab

  console.log(JSON.stringify(lab, null, 4))

  const data = [
    {
      x: [charge10.time, charge20.time, charge30.time], 
      y: [charge10.solutions, charge20.solutions, charge30.solutions],
      type: 'bar',
      name: 'Relação: Soluções x Tempo'
    },
  ];
  
  return data
}

plotLib.plot(generateGraph());