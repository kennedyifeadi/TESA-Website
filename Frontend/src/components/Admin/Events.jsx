import React, { useState } from 'react'
import TESA from "../../assets/images/logo.png"


export const AdminEvents = () => {
  const [isclicked, setIsClicked] = useState(false)
  const handlePastEvents = ()=>{
    setIsClicked(true)
  }
  const handleUpcomingEvents = ()=>{
    setIsClicked(false)
  }
  const titles = ['Name', 'Subtext', 'Date', 'Time', 'Category']
  const pastTitles = ['Name', 'SubText', 'Date', 'Category' ]
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-0 w-full h-full opacity-15' style={{ backgroundImage: `url(${TESA})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <div className='relative flex flex-col w-full h-full pt-14 px-6 gap-6'>
        <div className='h-[70px] w-full flex border border-black border-t-0' style={{ fontFamily: '"Aldrich", sans-serif' }}>
          <div className={`flex-1 flex justify-center items-center cursor-pointer ${!isclicked ? "bg-black text-white" : "text-black"}`} onClick={handleUpcomingEvents}>Upcoming Events</div>
          <div className={`flex-1 flex justify-center items-center cursor-pointer ${!isclicked ? "text-black" : "bg-black text-white"}`} onClick={handlePastEvents}>Past Events</div>
        </div>
        <div className='w-full h-max'>
          {
            !isclicked ?(
              <div className='w-full flex h-[70px] border-b border-b-black  bg-gradient-to-r from-[#007AFF] to-[#FA8F21]' style={{ fontFamily: '"Aldrich", sans-serif' }}>
              {
                titles.map((title, index) => (
                  <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 4 ? "border-r-none" : "border-r border-r-black"}`}>
                    <h1 className=' text-white cursor-default'>{title}</h1>
                  </div>
                ))
              }
            </div>
            ) : (
              <div className='w-full flex h-[70px] border-b border-b-black  bg-gradient-to-r from-[#007AFF] to-[#FA8F21]' style={{ fontFamily: '"Aldrich", sans-serif' }}>
              {
                pastTitles.map((title, index) => (
                  <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 3 ? "border-r-none" : "border-r border-r-black"}`}>
                    <h1 className=' text-white cursor-default'>{title}</h1>
                  </div>
                ))
              }
            </div>
            )
          }
        </div>
        <div className='w-full flex h-max'>klklflkefkl</div>
      </div>
    </div>
  )
}
