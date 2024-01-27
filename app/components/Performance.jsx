import React from 'react'
import Image from 'next/image'

function Performance() {
  return (
    <div className=''>
        <div className='block md:flex justify-between mt-6 md:mt-0'>
            <div className='relative border border-gray-500 shadow w-full md:w-[48%] rounded-lg px-4 md:px-2 py-4 h-[200px]'>
                <Image src="/total order icon.png" width={40} height={30} alt='total order icon' />
                <h1 className='text-[#898989] mt-3 mb-3 text-base'>Total Order</h1>
                <h1 className='text-xl font-medium'>350</h1>
                <div className='flex gap-2 items-center absolute bottom-6'>
                    <Image src="/Up.png" width={60} height={30} alt='up trend' className='h-6'  />
                    <p className='text-sm'>vs .previous month</p>
                </div>
                <Image  src="/up graph.png" width={110} height={50} alt='upward trend graph' className='absolute top-6 right-5'/>
            </div>
            <div className='relative border border-gray-500 shadow w-full md:w-[48%] rounded-lg mt-6 md:mt-0 px-2 py-4 h-[200px]'>
                <Image src="/total refund icon.png" width={40} height={30} alt='total refund icon' />
                <h1 className='text-[#898989] mt-3 mb-3 text-base'>Total Refund</h1>
                <h1 className='text-xl font-medium'>270</h1>
                <div className='flex gap-2 items-center absolute bottom-6'>
                    <Image src="/down.png" width={60} height={30} alt='up trend' className='h-6'  />
                    <p className='text-sm'>vs .previous month</p>
                </div>
                <Image  src="/down graph.png" width={110} height={50} alt='upward trend graph' className='absolute top-6 right-5'/>
            </div>
        </div>
        <div className='block md:flex justify-between mt-6 '>
            <div className='relative border border-gray-500 shadow w-full md:w-[48%] rounded-lg px-2 py-4 h-[200px]'>
                <Image src="/average sales icon.png" width={40} height={30} alt='average sales icon' />
                <h1 className='text-[#898989] mt-3 mb-3 text-base'>Average Sales</h1>
                <h1 className='text-xl font-medium'>1567</h1>
                <div className='flex gap-2 items-center absolute bottom-6'>
                    <Image src="/down.png" width={60} height={30} alt='up trend' className='h-6'  />
                    <p className='text-sm'>vs .previous month</p>
                </div>
                <Image  src="/down graph.png" width={110} height={50} alt='upward trend graph' className='absolute top-6 right-5'/>
            </div>
            <div className='relative border border-gray-500 shadow w-full md:w-[48%] rounded-lg mt-6 md:mt-0 px-2 py-4 h-[200px]'>
                <Image src="/total income icon.png" width={40} height={30} alt='total order icon' />
                <h1 className='text-[#898989] mt-3 mb-3 text-base'>Total income</h1>
                <h1 className='text-xl font-medium'>$350.000</h1>
                <div className='flex gap-2 items-center absolute bottom-6'>
                    <Image src="/Up.png" width={60} height={30} alt='up trend' className='h-6'  />
                    <p className='text-sm'>vs .previous month</p>
                </div>
                <Image  src="/up graph.png" width={110} height={50} alt='upward trend graph' className='absolute top-6 right-5'/>
            </div>
        </div>
    </div>
  )
}

export default Performance