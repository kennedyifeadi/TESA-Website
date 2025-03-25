import React from 'react'
import { Events } from './Events'
import { DynamicBackground } from './DynamicBackground'
import Background from "../assets/images/HeroSectionBackground.jpg";
import AnnouncementsBG from "../assets/images/announcementBG.jpg";
import speaker from '../assets/gifs/announcement.gif'
import search from '../assets/icons/search1.png'

export const Announcements = () => {
  return (
    <div className='w-full h-screen flex flex-col px-8 relative pb-14'>
      <DynamicBackground imageUrl={Background}/>
      <div className='w-full h-full flex flex-col  z-10'>
        <div className='w-full h-[20%] px-14 flex justify-center items-center relative'>
          <DynamicBackground imageUrl={AnnouncementsBG}/>
          <div className='flex gap-6 items-center w-full h-full z-10' >
            <img src={speaker} alt="" className='w-[15%] h-full object-contain' />
            <div className='flex flex-col w-[35%] h-full justify-center gap-2'>
              <span className='font-medium text-white text-3xl' style={{ fontFamily: '"Aldrich", sans-serif' }}>
                Announcements
              </span>
              <span className='relative flex justify-end items-center bg-white h-[30%] w-full rounded-md'>
                <img src={search} alt="" className='absolute right-2 w-[15px] h-[15px]' />
                <input type="text" name="search" className='bg-transparent w-full h-full outline-none rounded-md px-4'  />
              </span>
            </div>
          </div>
        </div>
        <div className='w-full h-[90%] flex px-6'>
            <Events/>
        </div>
      </div>
    </div>
  )
}
