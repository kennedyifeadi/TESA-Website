import React from 'react'
import Background from "../assets/images/HeroSectionBackground.jpg";
import owl from "../assets/gifs/owl.gif";
import { DynamicBackground } from './DynamicBackground'
import { motion } from 'framer-motion'

export const ResourceLanding = () => {
  return (
    <div className='w-full h-screen flex items-end relative'>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-full h-[80%] md:h-[90%] flex flex-col md:flex-row '>
            <motion.div
                                        initial = {{x:-300}}
    animate = {{x:0}}
    transition={{duration: 1}}
             className='w-full md:w-[40%] h-[50%] md:h-full flex justify-center items-center z-10'>
                <img src={owl} alt="" className='object-contain w-full h-full md:w-max md:h-max md:mb-40' />
            </motion.div>
            <motion.div
                                        initial = {{x:300}}
    animate = {{x:0}}
    transition={{duration: 1}}
             className='w-full md:w-[60%] h-[50%] md:h-full flex justify-center items-center z-10'>
                <p className='bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent w-full md:w-[70%] text-center md:leading-12 h-full md:h-[40%] font-semibold text-2xl px-3 md:px-0 md:text-4xl' >
                Explore our curated collection of study materials, online tools, career resources, and more to help you succeed.
                </p>
            </motion.div>
        </div>
    </div>
  )
}
