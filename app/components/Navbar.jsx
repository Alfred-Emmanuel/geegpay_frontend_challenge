"use client"
import {useState} from 'react'
import { Search, Bell, CalendarDays, ChevronDown } from 'lucide-react'
import Image from 'next/image';

function Navbar() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  return (
    <nav className='flex gap-10 items-center justify-between px-5 h-20 border-b'>
      <div className='flex items-center justify-between w-[65%] h-full'>
        <div className='w-[30%]'>
            <h1 className='text-xl font-sans font-semibold'>Dashboard</h1>
        </div>
        <div className='relative rounded-full flex items-center w-[50%]' >
            <input 
                type='text' 
                placeholder='Search...'
                value={inputValue}
                onChange={handleInputChange} 
                className='rounded-full w-full outline-none py-2 px-7 border-2'
            />
            {inputValue === '' ? (
            <Search size={15} color='gray' className='absolute top-1/2 transform -translate-y-1/2 left-2' />
            ) : null}
        </div>
      </div>
      <div className='flex items-center justify-between w-[30%]'>
        <div className='flex justify-around items-center font-medium gap-2' >
            <CalendarDays size={18} />
            <h5 className='text-xs'>November 15, 2023</h5>
        </div>
        <div className='border-2 py-2 px-2 rounded-full'>
            <Bell size={18}/>
        </div>
        <div className='flex items-center gap-2 border-2 rounded-full py-1 px-2'>
            <Image src="/profile.png" width={27} height={27} alt="profile photo"/>
            <div className='text-right'>
                <h1 className='text-sm font-medium'>Justin Bergson</h1>
                <p className='text-xs'>Justin@gmail.com</p>
            </div>
            <ChevronDown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
