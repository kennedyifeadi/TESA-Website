import React from 'react'
import { DynamicBackground } from './DynamicBackground'
import sponsorship from '../assets/images/enquiries.jpg'
import sponsorshipArrow from '../assets/images/sponsorhipArrow.png'
import dropdown from '../assets/gifs/dropdown.gif'

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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.52962651606686!2d3.8921383349997534!3d7.439006857555831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f2bc3f43cdbf%3A0xff9f4ea053132db0!2sFaculty%20Of%20Technology!5e0!3m2!1sen!2sng!4v1742559546190!5m2!1sen!2sng" className='w-full h-full border-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
