import React from 'react'

function LastOrders() {
  const tableHeaders = ['Name', 'Date', 'Amount', 'Status', 'Invoice'];

  const tableData = [
    ['John Doe', '2022-01-01', '$100.00', 'Paid', 'INV-001'],
    ['Jane Smith', '2022-01-02', '$150.00', 'Pending', 'INV-002'],
    // Add more rows as needed
  ];
  return (
    <table className='w-full mt-5 text-sm' style={{ borderCollapse: 'collapse'}}>
    <thead>
      <tr>
        {tableHeaders.map((header, index) => (
          <th key={index} className='text-[#9CA4AB] border-b text-left pb-2'>
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
                {cellIndex === 0 ? (
                  <div className='flex items-center'>
                    <img src={`/path/to/images/${cell.toLowerCase()}.jpg`} alt={cell} className='w-6 h-6 mr-2 rounded-full' />
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
  )
}

export default LastOrders
