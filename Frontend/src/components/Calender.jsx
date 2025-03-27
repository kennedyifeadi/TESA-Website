import React from 'react'
import { DynamicBackground } from './DynamicBackground'
import Background from "../assets/images/HeroSectionBackground.jpg";
import CalenderImage from "../assets/images/calender.png"
import CustomDateCalendar from './UI/CalenderCard';


export const Calender = () => {
  return (
    <div className='w-full h-screen flex relative items-end'>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-full px-8 h-[90%] flex z-10'>
            <div className='h-full flex justify-end items-center px-6 w-[40%] '>
                <img src={CalenderImage} alt="" className='w-[100%] h-full object-contain bo'/>
            </div>
            <div className='h-full flex justify-start items-center px-6 w-[60%]'>
              <CustomDateCalendar/>
            </div>
        </div>
    </div>
  )
}
