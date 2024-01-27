import React from 'react'
import Image from 'next/image';

function LastOrders() {
  const tableHeaders = ['Name', 'Date', 'Amount', 'Status', 'Invoice'];

  const tableData = [
    ['Marcus Bergson', '2022-01-01', '$100.00', 'Paid', 'View'],
    ['Jaydon Vacarro', '2022-01-02', '$150.00', 'Refund', 'View'],
    ['Corey Schleifer', '2022-01-02', '$150.00', 'Paid', 'View'],
    ['Cooper Press', '2022-01-02', '$150.00', 'Refund', 'View'],
    ['Phillip Lubin', '2022-01-02', '$150.00', 'Paid', 'View'],
  ];
  const nameToImageMap = {
    'Marcus Bergson': 'marcus.png',
    'Jaydon Vacarro': 'jaydon.png',
    'Corey Schleifer': 'corey.png',
    'Cooper Press': 'cooper.png',
    'Phillip Lubin': 'phillip.png',
    
  };

  return (
    <div className='overflow-x-auto md:overflow-x-hidden'>
<table className='w-full mt-5 text-sm' style={{ borderCollapse: 'collapse'}}>
    <thead>
      <tr>
        {tableHeaders.map((header, index) => (
          <th key={index} className='text-[#9CA4AB] border-b border-gray-500 md:text-left pb-2'>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className='text-left'>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex} className='text-left'>
            {row.map((cell, cellIndex) => (
              <td 
                key={cellIndex}
                className={`whitespace-nowrap border-b border-gray-500 py-6 px-5 md:py-4 ${
                cellIndex === 3 && cell.toLowerCase() === 'paid' ? 'text-green-500' : ''
                } ${cellIndex === 3 && cell.toLowerCase() === 'refund' ? 'text-red-500' : ''}`}
              >
                {cellIndex === 0 ? (
                  <div className='flex items-center'>
                    <Image src={`/${nameToImageMap[cell] || 'default.jpg'}`} width={20} height={20} alt="profile" className='w-6 h-6 mr-2 rounded-full' />
                    {cell}
                  </div>
                ) : cellIndex === 2 ? (
                  <strong>{cell}</strong>
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
  </table>
    </div>
  )
}

export default LastOrders
