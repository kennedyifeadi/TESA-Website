import React from 'react'
import { DynamicBackground } from "./DynamicBackground";
import Background from "../assets/images/HeroSectionBackground.jpg";
import DummyBG from "../assets/images/dummyBG.jpg";
import Cuate from '../assets/images/cuate.png'
import { motion } from 'framer-motion'



export const SponsorshipHeroSection = () => {
  return (
    <div className='w-full h-screen flex items-end px-2 md:px-8 relative  z-10'>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-full h-[80%] md:h-[90%] pt-4 z-10'>
            <motion.div
                initial = {{x:300}}
    animate = {{x:0}}
    transition={{duration: 1}}
             className='w-full h-[18%] md:h-[30%] relative flex flex-col justify-center items-center'>
                <DynamicBackground imageUrl={DummyBG}/>
                <h1 className='w-full text-center text-2xl md:text-5xl text-white z-10' style={{ fontFamily: '"Aldrich", sans-serif' }}>SPONSORSHIP</h1>
                <p className='w-full text-center text-[10px] md:text-md text-white z-10' style={{ fontFamily: '"Poppins", sans-serif' }}>Support us in driving progress and Making a Difference with TESA</p>
            </motion.div>
            <motion.div
                initial = {{x:-300}}
    animate = {{x:0}}
    transition={{duration: 1}}
             className='w-full h-[82%] md:h-[70%] flex justify-center items-center'>
                <img src={Cuate} alt="" className='md:w-[300px] w-[400px] h-[400px] md:h-[300px] object-contain' />
            </motion.div>
        </div>
    </div>
  )
}
