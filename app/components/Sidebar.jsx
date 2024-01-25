import React from 'react'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className=' fixed w-[80px] hidden md:block border-2 h-screen'>
        <div className='flex flex-col gap-4 items-center justify-center pt-6'>
            <Image src="/logo.png" width={33} height={33} alt='logo'/>
            <Image src="/dashboard icon.png" width={30} height={30} alt='dasboard icon'title='dashboard' className='cursor-pointer' />
            <Image src="/analytics icon.png" width={30} height={30} alt='analytics icon' title='analytics' className='cursor-pointer'/>
            <Image src="/people icon.png" width={30} height={30} alt='people' title='customers' className='cursor-pointer'/>
            <Image src="/3d box icon.png" width={30} height={30} alt='3d box' title='gifts' className='cursor-pointer'/>
            {/* <Image src="/time icon.png" width={30} height={30} alt='logo'/> */}
            <Image src="/time icon.png" width={30} height={30} alt='time icon' title='days' className='cursor-pointer'/>
            <Image src="/exclamation mark icon.png" width={30} height={30} alt='exclamation mark icon' title='events' className='cursor-pointer hover:bg-blue-500 rounded-full color-white'/>
            <Image src="/light mode icon.png" width={30} height={30} alt='light mode' title='light mode' className='cursor-pointer'/>
            <Image src="/dark mode icon.png" width={30} height={30} alt='dark mode' title='dark mode' className='cursor-pointer'/>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center pt-20'>
          <Image src="/right arrow icon.png" width={30} height={30} alt='right hand arrow icon' title='go back' className='cursor-pointer'/>
          <Image src="/settings icon.png" width={30} height={30} alt='settings icon' title='settings' className='cursor-pointer'/>
          <Image src="/exit icon.png" width={30} height={30} alt='exit icon' title='exit' className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default Sidebar
