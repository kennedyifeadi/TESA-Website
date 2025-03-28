import React, { useState } from 'react'
import { ExecutivesBtn } from './ExecutivesBtn'
import executiveBackground from '../../assets/images/executiveBackground.jpg'
import { ExecutivesSocials } from './ExecutivesSocials';
import twitter from '../../assets/icons/twitter-fill.png'
import instagram from '../../assets/icons/icons8-instagram-32 1.png'
import mail from '../../assets/icons/mail-open-arrow-up-svgrepo-com 1.png'



export const ExecutivesCard = ({Name, Position, Level, Twitter, Instagram, Email, Image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    className={`h-[100px] md:h-[400px] cursor-pointer rounded-md w-[100px] md:w-[400px] bg-cover bg-center bg-no-repeat md:gap-2 flex flex-col p-[2px] md:p-2 relative z-10`}
    style={{backgroundImage: `url(${executiveBackground})`}}
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-white opacity-80 rounded-md"></div>
      <div className='w-full h-[60%] md:h-[70%] flex justify-center items-center z-10'>
        <div className={`${isHovered ? " w-[90%] h-[90%]" : "w-[80%] h-[80%]"} duration-500 ease-in-out transition-all`}>
          <img src={Image} alt="" className={`h-full w-full object-cover rounded-sm md:rounded-3xl `} style={{objectPosition: "0px -10px"}}/> 
        </div>
      </div>
      <div className='w-full h-[40%] md:h-[30%] gap-[2px] md:gap-2 flex z-10 flex-col'>
        <span className='flex justify-center items-end md:pb-2 w-full h-[55%] text-medium text-[8px] text-center md:text-2xl text-[#392B1A] border-b-[#392B1A] border-b capitalize' style={{fontFamily:'"Poppins", sans-serif'}}>{Name}</span>
        <span className='w-full h-[45%] flex flex-col justify-center items-center relative'>
          <span className={`font-medium text-white ${isHovered ? "opacity-0" : "opacity-100"} duration-1000 ease-in-out transition-all w-full h-full gap-4 flex justify-between`}>
          <ExecutivesBtn text={Position}/>
          <ExecutivesBtn text={Level}/>
          </span>
          <div className={`absolute justify-center items-center top-0 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-[14px] opacity-0"} duration-1000  ease-in-out transition-all flex w-[70%] h-full`}>
            <ExecutivesSocials logo={twitter} link={Twitter}/>
            <ExecutivesSocials logo={instagram} link={Instagram}/>
            <ExecutivesSocials logo={mail} link={Email}/>
          </div>
        </span>
      </div>
    </div>
  )
}
