import { Bar } from 'react-chartjs-2'
import {Chart as chartjs} from "chart.js/auto"

function SalesTrends({chartData}) {
  chartData.datasets.forEach((dataset) => {
    dataset.borderWidth = 0;
  }); 
  const options = {
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        // border: {
        //   // display: false
        //   dash: [12, 6]
        // }
      },
      y: {
        max: 50000, 
        ticks: {
          stepSize: 10000
          
        },
        grid: {

        },
        border: {
          display: false,
          dash: [5, 5]

        }
      },
    },
  }; 
  return (
    <Bar data={chartData} options={options}/>
  )
}

export default SalesTrends
