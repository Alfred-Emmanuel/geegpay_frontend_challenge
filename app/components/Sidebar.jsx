import React,{useState, useEffect} from 'react'
import Image from 'next/image'

function Sidebar() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    // Toggle the mode when the button is clicked
    setIsLightMode(prevMode => !prevMode);
  };

  // Add an effect to handle mode changes and apply styles
  useEffect(() => {
    const body = document.body;
    const root = document.documentElement
  
    if (isLightMode) {
      // Apply light mode styles to the body
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    } else {
      // Apply dark mode styles to the body
      body.style.backgroundColor = '#111827';
      body.style.color = 'gray';
    }
  }, [isLightMode]);

  return (
    <div className={`fixed w-[25%] md:w-[80px] block border-0 md:border-r border-gray-500 h-screen -top-1 bg-transparent backdrop-blur-md z-40`}>
        <div className='flex flex-col gap-4 items-center md:justify-center pt-6'>
            <Image src="/logo.png" width={37} height={37} alt='logo' className='hidden md:block'/>
            {isLightMode && <Image src="/dashboard icon.png" width={33} height={33} alt='dasboard icon'title='dashboard' className='cursor-pointer' />}
            {!isLightMode && <Image src="/light dashboard icon.png" width={33} height={33} alt='dasboard icon'title='dashboard' className='cursor-pointer' />}
            <Image src="/analytics icon.png" width={33} height={33} alt='analytics icon' title='analytics' className='cursor-pointer'/>
            <Image src="/people icon.png" width={33} height={33} alt='people' title='customers' className='cursor-pointer'/>
            <Image src="/3d box icon.png" width={33} height={33} alt='3d box' title='gifts' className='cursor-pointer'/>
            <Image src="/time icon.png" width={33} height={33} alt='time icon' title='days' className='cursor-pointer'/>
            <Image src="/exclamation mark icon.png" width={33} height={33} alt='exclamation mark icon' title='events' className='cursor-pointer hover:bg-blue-500 rounded-full color-white'/>
        {!isLightMode && <Image src="/light mode icon.png" width={33} height={33} alt='light mode' title='light mode' className='cursor-pointer' onClick={toggleMode}/>}
        {isLightMode && <Image src="/dark mode icon.png" width={33} height={33} alt='dark mode' title='dark mode' className='cursor-pointer' onClick={toggleMode}/>}
        </div>
        <div className='flex flex-col gap-5 items-center md:justify-center pt-24 md:pt-16'>
          <Image src="/right arrow icon.png" width={33} height={33} alt='right hand arrow icon' title='go back' className='cursor-pointer'/>
          <Image src="/settings icon.png" width={33} height={33} alt='settings icon' title='settings' className='cursor-pointer'/>
          <Image src="/exit icon.png" width={33} height={33} alt='exit icon' title='exit' className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default Sidebar
