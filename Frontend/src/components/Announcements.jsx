import React, { useState } from 'react'
import { Events } from './Events'
import { DynamicBackground } from './DynamicBackground'
import Background from "../assets/images/HeroSectionBackground.jpg";
import AnnouncementsBG from "../assets/images/announcementBG.jpg";
import speaker from '../assets/gifs/announcement.gif'
import search from '../assets/icons/search1.png'

export const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // The search filtering will be handled in the Events component
  }

  return (
    <div className='w-full h-screen flex flex-col px-2 md:px-8 relative pb-14'>
      <DynamicBackground imageUrl={Background}/>
      <div className='w-full h-full flex flex-col  z-10'>
        <div className='w-full h-[20%] px-4 md:px-14 flex justify-center items-center relative'>
          <DynamicBackground imageUrl={AnnouncementsBG}/>
          <div className='flex gap-2 md:gap-6 items-center w-full h-full z-10' >
            <img src={speaker} alt="" className='w-[20%] md:w-[15%] h-full object-contain' />
            <div className='flex flex-col w-[80%] md:w-[35%] h-full justify-center md:gap-2'>
              <span className='font-medium text-white text-2xl md:text-3xl' style={{ fontFamily: '"Aldrich", sans-serif' }}>
                Announcements
              </span>
              <form onSubmit={handleSearchSubmit} className='relative flex justify-end items-center bg-white h-[50%] mb-1 md:h-[30%] w-full rounded-md'>
                <img 
                  src={search} 
                  alt="" 
                  className='absolute right-2 w-[15px] h-[15px] cursor-pointer' 
                  onClick={handleSearchSubmit}
                />
                <input 
                  type="text" 
                  placeholder='search..' 
                  name="search" 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className='bg-transparent font-medium w-full h-full outline-none rounded-md px-4'  
                />
              </form>
            </div>
          </div>
        </div>
        <div className='w-full h-[90%] flex px-2 md:px-6'>
            <Events searchTerm={searchTerm}/>
        </div>
      </div>
    </div>
  )
}