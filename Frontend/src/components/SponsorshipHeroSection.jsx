import React from 'react'
import { DynamicBackground } from "./DynamicBackground";
import Background from "../assets/images/HeroSectionBackground.jpg";
import DummyBG from "../assets/images/dummyBG.jpg";
import Cuate from '../assets/images/cuate.png'


export const SponsorshipHeroSection = () => {
  return (
    <div className='w-full h-screen flex items-end px-8 relative  z-10'>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-full h-[90%] pt-4 z-10'>
            <div className='w-full h-[30%] relative flex flex-col justify-center items-center'>
                <DynamicBackground imageUrl={DummyBG}/>
                <h1 className='w-full text-center text-5xl text-white z-10' style={{ fontFamily: '"Aldrich", sans-serif' }}>SPONSORSHIP</h1>
                <p className='w-full text-center text-md text-white z-10' style={{ fontFamily: '"Poppins", sans-serif' }}>Support us in driving progress and Making a Difference with TESA</p>
            </div>
            <div className='w-full h-[70%] flex justify-center items-center'>
                <img src={Cuate} alt="" className='w-[300px] h-[300px] object-contain' />
            </div>
        </div>
    </div>
  )
}
