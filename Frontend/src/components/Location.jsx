import React from 'react'
import { DynamicBackground } from './DynamicBackground'
import sponsorship from '../assets/images/enquiries.jpg'
import sponsorshipArrow from '../assets/images/sponsorhipArrow.png'
import dropdown from '../assets/gifs/dropdown.gif'
import locationMap from '../assets/gifs/locationMap.gif'
import location from '../assets/icons/location.png'

export const Location = () => {
  return (
    <div className='w-full h-[150dvh] '>
      <div className='h-[66.67%] w-full flex justify-center items-center relative'>
        <DynamicBackground imageUrl={sponsorship}/>
        <div className='absolute inset-0 top-0 bg-white opacity-80'></div>
        <div className='flex flex-col w-full h-full items-center justify-between z-10'>
          <img src={sponsorshipArrow} alt="" className='h-[40%]' />
         <div className='w-full h-[30%] flex flex-col justify-center gap-4'>
          <h1 className='font-semibold text-3xl text-black w-full text-center' style={{fontFamily:'"Poppins", sans-serif'}}>Sponsorships or Inquiries?</h1>
          <p className='w-full text-center text-[#908F8F] text-[15px]' style={{fontFamily:'"Poppins", sans-serif'}}>Kindly pay us a visit or reach out to us on our social media platforms</p>
         </div>
          <img src={dropdown} alt="" className=' h-[30%]' />
        </div>
      </div>
      <div className='h-[33.33%] w-full relative flex justify-center items-center'>
        <DynamicBackground imageUrl={locationMap}/>
        <img src={location} alt="" className='z-10 w-[70%] h-[70%]' />
      </div>
    </div>
  )
}
