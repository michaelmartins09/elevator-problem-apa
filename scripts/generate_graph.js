const plotLib = require('nodeplotlib')
const { lab } = require("./execute_lab")

const generateGraph = () => {
  const { bruteForce, progDynamic } = lab

  const data = [
    {
      y: [bruteForce.experimento1.time, bruteForce.experimento2.time, bruteForce.experimento3.time], 
      x: [bruteForce.experimento1.charge, bruteForce.experimento2.charge, bruteForce.experimento3.charge],
      type: 'line',
      name: 'Alg Brute Force'
    },
    {
      y: [progDynamic.experimento1.time, progDynamic.experimento2.time, progDynamic.experimento3.time], 
      x: [progDynamic.experimento1.charge, progDynamic.experimento2.charge, progDynamic.experimento3.charge],
      type: 'line',
      name: 'Alg Dynamic Programming'
    },
  ];
  
  return data
}

plotLib.plot(generateGraph());