import { useState } from 'react';
import { Bar } from 'react-chartjs-2'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronDown } from 'lucide-react';
import {Chart as chartjs} from "chart.js/auto"


function SalesTrends({chartData}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleTextClick = () => {
    setCalendarOpen(!calendarOpen);
  };

  chartData.datasets.forEach((dataset) => {
    dataset.borderWidth = 0;
  }); 
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
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
    <div className='relative md:h-[390px]'>
      <div className=' md:flex justify-between mt-4 mb-4 text-base'>
        <h1 className='font-semibold mb-4 md:mb-0'>Sales Trends</h1>
        <div className='flex gap-5 items-center md:items-start mb-2 md:mb-0~ '>
          <h1 className='lg:mt-2'>Sort by:</h1>
          <div>
            <div 
              className='flex gap-1 items-center border px-2 py-1 rounded-full border-gray-500 cursor-pointer'
              onClick={handleTextClick}
            >
              <span
                className=''
              >
                Weekly
              </span>
              <ChevronDown color='gray' />
            </div>
            {calendarOpen && (
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                className='absolute top-[100%] left-0 '
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={15}
                open={true}
              />
            )}
          </div>
        </div>
      </div>
      <div className='h-[450px] md:h-[330px] w-[200%] md:w-auto'>
        <Bar data={chartData} options={options}/>
      </div>
    </div>
  )
}

export default SalesTrends
