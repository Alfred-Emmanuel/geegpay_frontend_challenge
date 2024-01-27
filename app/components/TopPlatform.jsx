import React from 'react'

function TopPlatform() {
  return (
    <div className='border border-gray-500 rounded-lg shadow mt-6 mb-2 px-3 md:h-80'>
        <div className="flex justify-between items-center text-lg mb-2 pt-4 pb-2">
            <h1 className="font-semibold">Top Platform</h1>
            <h1 className="font-medium text-[#63D7BA] cursor-pointer" title="view all">See All</h1>
        </div>
        <div className='text-base'>
            <div className='mb-4'>
                <h1 className='font-medium mb-2'>Book Bazaar</h1>
                <div className='bg-[#f5f5f5] rounded-lg w-full h-2 mb-2'>
                    <div className='bg-[#6160dc] w-[60%] h-2 rounded-lg'></div>
                </div>
                <div className='flex items-center justify-between text-sm text-gray-400'>
                    <p>$2,500,000</p>
                    <p>+15%</p>
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='font-medium mb-2'>Artisan Aisle</h1>
                <div className='bg-[#f5f5f5] rounded-lg w-full h-2 mb-2'>
                    <div className='bg-[#54c5eb] w-[50%] h-2 rounded-lg'></div>
                </div>
                <div className='flex items-center justify-between text-sm text-gray-400'>
                    <p>$1,800,000</p>
                    <p>+10%</p>
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='font-medium mb-2'>ToyTroop</h1>
                <div className='bg-[#f5f5f5] rounded-lg w-full h-2 mb-2'>
                    <div className='bg-[#ffb74a] w-[35%] h-2 rounded-lg'></div>
                </div>
                <div className='flex items-center justify-between text-sm text-gray-400'>
                    <p>$1,200,000</p>
                    <p>+8%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopPlatform