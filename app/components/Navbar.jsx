"use client"
import {useState} from 'react'
import { Search, Bell, CalendarDays, ChevronDown, X } from 'lucide-react'
import Image from 'next/image';

function Navbar({toggleSidebar, isSidebarVisible}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  return (
    <>
      <nav className='hidden md:flex gap-10 items-center justify-between px-5 h-20 border-b border-gray-500'>
        <div className='flex items-center justify-between md:w-[53%] lg:w-[65%] h-full'>
          <div className='w-[30%]'>
              <h1 className='text-xl font-sans font-semibold'>Dashboard</h1>
          </div>
          <div className='relative rounded-full flex items-center w-[50%]' >
              <input 
                  type='text' 
                  placeholder='Search...'
                  value={inputValue}
                  onChange={handleInputChange} 
                  className='rounded-full w-full outline-none py-2 px-7 border border-gray-500 bg-transparent'
              />
              {inputValue === '' ? (
              <Search size={15} color='gray' className='absolute top-1/2 transform -translate-y-1/2 left-2' />
              ) : null}
          </div>
        </div>
        <div className='flex items-center gap-5 justify-end w-[35%]'>
          <div className='flex justify-around items-center font-medium gap-2' >
              <CalendarDays size={18} />
              <h5 className='text-xs'>November 15, 2023</h5>
          </div>
          <div className='border border-gray-500 py-2 px-2 rounded-full'>
              <Bell size={18}/>
          </div>
          <div className='flex items-center gap-2 border border-gray-500 rounded-full py-1 px-2'>
              <Image src="/profile.png" width={27} height={27} alt="profile photo"/>
              <div className='text-right'>
                  <h1 className='text-sm font-medium'>Justin Bergson</h1>
                  <p className='text-xs'>Justin@gmail.com</p>
              </div>
              <ChevronDown />
          </div>
        </div>
      </nav>

      <nav className='md:hidden flex gap-10 items-center justify-between px-5 h-20 border-b fixed -top-1 z-40 w-full bg-opacity-70 bg-black backdrop-blur-md'>
        <Image src="/logo.png" width={40} height={33} alt='logo'/>
        <div className='flex justify-between items-center'>
          <div className='relative rounded-full flex items-center w-[70%]' >
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
          {
          isSidebarVisible ? (<X onClick={toggleSidebar}/>) : (<Image src="/profile.png" width={35} height={27} alt="profile photo" className='cursor-pointer' onClick={toggleSidebar}/>)
          }
        </div>
      </nav>
      
    </>
  )
}

export default Navbar
