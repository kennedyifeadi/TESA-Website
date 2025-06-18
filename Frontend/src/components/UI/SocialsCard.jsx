import React, { useState } from 'react'

export const SocialsCard = ({text, icon, hoverIcon, link}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='h-full flex justify-center items-center flex-1 px-4 hover:bg-[#392B1A] duration-500 ease-in-out'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center h-full w-full cursor-pointer'>
              <span className={`${isHovered ? "translate-y-[-20px] text-white" : "translate-y-0"} text-black text-[10px] md:text-2xl font-medium duration-500 ease-in-out transition-all`} style={{fontFamily:'"Poppins", sans-serif'}}>{text}</span>
      {
      isHovered ? (text === "LinkedIn" ? <span className='text-2xl p-[2px] md:h-8 translate-y-[-10px] text-white'> {hoverIcon } </span>: (
          <img src={hoverIcon} alt="" className='w-4 md:w-8 h-4 md:h-8 translate-y-[-10px]'/>
        )) : ( text === "LinkedIn" ? <span className='text-2xl p-[2px]'> {icon} </span> : (
           <img src={icon} alt="" className='w-4 md:w-8 h-4 md:h-8 ' />
        )
        )
      }
      </a>
    </div>
  )
}
