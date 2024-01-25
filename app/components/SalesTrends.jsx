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
          // display: false,
          borderDash: [5, 5], // Hide grid lines for x-axis
        },
      },
      y: {
        max: 50000, 
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
    },
  }; 
  return (
    <Bar data={chartData} options={options}/>
  )
}

export default SalesTrends
