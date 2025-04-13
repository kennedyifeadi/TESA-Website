import React from 'react'
import { DynamicBackground } from './DynamicBackground'
import Background from "../assets/images/HeroSectionBackground.jpg";
import CalenderImage from "../assets/images/calender.png"
import CustomDateCalendar from './UI/CalenderCard';
import { motion } from 'framer-motion'


export const Calender = () => {
  return (
    <div className='w-full h-[120dvh] md:h-screen flex relative items-end'>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-full px-2 md:px-8 h-[80%] md:h-[90%] flex z-10 md:flex-row flex-col'>
            <motion.div
                            initial = {{x:-300}}
    animate = {{x:0}}
    transition={{duration: 1}}
             className=' h-[40%] md:h-full flex justify-center md:justify-end items-center md:px-6 w-full md:w-[40%] '>
                <img src={CalenderImage} alt="" className='w-[100%] h-full object-contain bo'/>
            </motion.div>
            <motion.div
                            initial = {{x:300}}
    animate = {{x:0}}
    transition={{duration: 1}}
             className='h-[60%] md:h-full flex justify-center md:justify-start items-center px-6 w-full md:w-[60%]'>
              <CustomDateCalendar/>
            </motion.div>
        </div>
    </div>
  )
}
