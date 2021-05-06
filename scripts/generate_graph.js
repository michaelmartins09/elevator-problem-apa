const plotLib = require('nodeplotlib')
const { lab } = require("./execute_lab")

const generateLayout = () => {
  return {
    title: 'Comparação Brute force x Dynamic Programming',
    xaxis: {
      title: 'Quantidade de andares'
    },
    yaxis: {
      title: 'Tempo de execução'
    }
  };
}

const generateGraph = () => {
  const { bruteForce, progDynamic, caseSize } = lab
  const data = [
    {
      y: Array.from({length: caseSize}, (_, index) => bruteForce[`experimento${index+1}`].time),
      x: Array.from({length: caseSize}, (_, index) => bruteForce[`experimento${index+1}`].lifts),
      type: 'line', name: 'Brute Force'
    },
    {
      y: Array.from({length: caseSize}, (_, index) => progDynamic[`experimento${index+1}`].time),
      x: Array.from({length: caseSize}, (_, index) => progDynamic[`experimento${index+1}`].lifts),
      type: 'line', name: 'Dynamic Programming'
    },
  ];

  return data
}

plotLib.plot(generateGraph(), generateLayout(), [{}]);