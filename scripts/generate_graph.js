const plotLib = require('nodeplotlib')
const Layout = require('nodeplotlib')
const { lab } = require("./execute_lab")

const generateLayout = () => {
  const layout = {
    title: 'Comparação Brute force x Dynamic Programming',
    xaxis: {
      title: 'Quantidade de andares'
    },
    yaxis: {
      title: 'Tempo de execução'
    }
  };

  return layout
}

const generateGraph = () => {
  const { bruteForce, progDynamic } = lab
  const data = [
    {
      y: [
        bruteForce.experimento1.time,
        bruteForce.experimento2.time,
        bruteForce.experimento3.time,
        bruteForce.experimento4.time,
        bruteForce.experimento5.time,
        bruteForce.experimento6.time,
        bruteForce.experimento7.time,
        bruteForce.experimento8.time,
        bruteForce.experimento9.time,
        bruteForce.experimento10.time,
        bruteForce.experimento11.time,
        bruteForce.experimento12.time,
        bruteForce.experimento13.time,
        bruteForce.experimento14.time,
        bruteForce.experimento15.time,
        bruteForce.experimento16.time,
        bruteForce.experimento17.time,
        bruteForce.experimento18.time,
        bruteForce.experimento19.time,
        bruteForce.experimento20.time,
        bruteForce.experimento21.time,
        bruteForce.experimento22.time,
        bruteForce.experimento23.time,
        bruteForce.experimento24.time,
        bruteForce.experimento25.time,
        bruteForce.experimento26.time,
        bruteForce.experimento27.time,
        bruteForce.experimento28.time,
        bruteForce.experimento29.time,
        bruteForce.experimento30.time,
      ],
      x: [
        bruteForce.experimento1.charge,
        bruteForce.experimento2.charge,
        bruteForce.experimento3.charge,
        bruteForce.experimento4.charge,
        bruteForce.experimento5.charge,
        bruteForce.experimento6.charge,
        bruteForce.experimento7.charge,
        bruteForce.experimento8.charge,
        bruteForce.experimento9.charge,
        bruteForce.experimento10.charge,
        bruteForce.experimento11.charge,
        bruteForce.experimento12.charge,
        bruteForce.experimento13.charge,
        bruteForce.experimento14.charge,
        bruteForce.experimento15.charge,
        bruteForce.experimento16.charge,
        bruteForce.experimento17.charge,
        bruteForce.experimento18.charge,
        bruteForce.experimento19.charge,
        bruteForce.experimento20.charge,
        bruteForce.experimento21.charge,
        bruteForce.experimento22.charge,
        bruteForce.experimento23.charge,
        bruteForce.experimento24.charge,
        bruteForce.experimento25.charge,
        bruteForce.experimento26.charge,
        bruteForce.experimento27.charge,
        bruteForce.experimento28.charge,
        bruteForce.experimento29.charge,
        bruteForce.experimento30.charge,
      ],
      type: 'line',
      name: 'Brute Force'
    },
    {
      y: [
        progDynamic.experimento1.time,
        progDynamic.experimento2.time,
        progDynamic.experimento3.time,
        progDynamic.experimento4.time,
        progDynamic.experimento5.time,
        progDynamic.experimento6.time,
        progDynamic.experimento7.time,
        progDynamic.experimento8.time,
        progDynamic.experimento9.time,
        progDynamic.experimento10.time,
        progDynamic.experimento11.time,
        progDynamic.experimento12.time,
        progDynamic.experimento13.time,
        progDynamic.experimento14.time,
        progDynamic.experimento15.time,
        progDynamic.experimento16.time,
        progDynamic.experimento17.time,
        progDynamic.experimento18.time,
        progDynamic.experimento19.time,
        progDynamic.experimento20.time,
        progDynamic.experimento21.time,
        progDynamic.experimento22.time,
        progDynamic.experimento23.time,
        progDynamic.experimento24.time,
        progDynamic.experimento25.time,
        progDynamic.experimento26.time,
        progDynamic.experimento27.time,
        progDynamic.experimento28.time,
        progDynamic.experimento29.time,
        progDynamic.experimento30.time,

      ],
      x: [
        progDynamic.experimento1.charge,
        progDynamic.experimento2.charge,
        progDynamic.experimento3.charge,
        progDynamic.experimento4.charge,
        progDynamic.experimento5.charge,
        progDynamic.experimento6.charge,
        progDynamic.experimento7.charge,
        progDynamic.experimento8.charge,
        progDynamic.experimento9.charge,
        progDynamic.experimento10.charge,
        progDynamic.experimento11.charge,
        progDynamic.experimento12.charge,
        progDynamic.experimento13.charge,
        progDynamic.experimento14.charge,
        progDynamic.experimento15.charge,
        progDynamic.experimento16.charge,
        progDynamic.experimento17.charge,
        progDynamic.experimento18.charge,
        progDynamic.experimento19.charge,
        progDynamic.experimento20.charge,
        progDynamic.experimento21.charge,
        progDynamic.experimento22.charge,
        progDynamic.experimento23.charge,
        progDynamic.experimento24.charge,
        progDynamic.experimento25.charge,
        progDynamic.experimento26.charge,
        progDynamic.experimento27.charge,
        progDynamic.experimento28.charge,
        progDynamic.experimento29.charge,
        progDynamic.experimento30.charge,
      ],
      type: 'line',
      name: 'Dynamic Programming'
    },
  ];

  return data
}

plotLib.plot(generateGraph(), generateLayout(), [{}]);