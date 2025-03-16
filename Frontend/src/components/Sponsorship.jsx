import React from 'react'
import { Carousel } from './SponsoredCarousel'

export const Sponsorship = () => {
  return (
    <div className='w-full h-[100dvh] flex flex-col px-8 py-10 gap-4'>
      <div className='w-full h-[10%] flex justify-end items-center'>
        <span className='text-white bg-[#00F652] rounded-lg h-[80%] w-[150px] font-medium flex justify-center items-center text-[18px]'>Sponsored</span>
      </div>
      <div className='w-full h-[80%]'>
        <Carousel/>
      </div>
    </div>
  )
}
