import React, { useState } from 'react'

export const SocialsCard = ({text, icon, hoverIcon}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='h- full flex justify-center items-center flex-1 gap-2 px-4 hover:bg-[#392B1A] duration-500 ease-in-out'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`${isHovered ? "translate-y-[-20px] text-white" : "translate-y-0"} text-black text-2xl font-medium duration-500 ease-in-out transition-all`} style={{fontFamily:'"Poppins", sans-serif'}}>{text}</span>
      {
        isHovered ? (
          <img src={hoverIcon} alt="" className='w-8 h-8 translate-y-[-10px]'/>
          
        ) : (
          <img src={icon} alt="" className='w-8 h-8' />
        )
      }
    </div>
  )
}
