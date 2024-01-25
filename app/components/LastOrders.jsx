import React from 'react'

function LastOrders() {
  const tableHeaders = ['Name', 'Date', 'Amount', 'Status', 'Invoice'];

  const tableData = [
    ['John Doe', '2022-01-01', '$100.00', 'Paid', 'INV-001'],
    ['Jane Smith', '2022-01-02', '$150.00', 'Pending', 'INV-002'],
    // Add more rows as needed
  ];
  return (
    <table className='w-full mt-5' style={{ borderCollapse: 'collapse'}}>
    <thead>
      <tr>
        {tableHeaders.map((header, index) => (
          <th key={index} className='text-gray-400 border-b text-left pb-2'>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableData.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default LastOrders
