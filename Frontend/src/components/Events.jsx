import React, { useState } from 'react'
import { EventsObject } from './EventsObject'

export const Events = () => {
  const [isAll, setIsAll] = useState(true)
  const [isNews, setIsNews] = useState(false)
  const [isActivites, setIsActivities] = useState(false)

  const handleAll = () => {
    setIsActivities(false)
    setIsNews(false)
    setIsAll(true)

  }
  const handleActivites = () => {
    setIsActivities(true)
    setIsNews(false)
    setIsAll(false)
  }
  const handleNews = () => {
    setIsActivities(false)
    setIsNews(true)
    setIsAll(false)
  }
  return (
    <div className='w-full h-full flex flex-col gap-4 border'>
      <div className='w-full h-[10%] flex justify-start items-center gap-4'>
        <span onClick={handleAll} className={`w-[100px] cursor-pointer max-w-max ${isAll ? "text-white bg-[#80808079]" : "text-black"} h-[70%] px-2 flex justify-center items-center text-black hover:bg-[#80808079] hover:text-white duration-500 transition-all rounded-full font-medium`}>All</span>
        <span onClick={handleNews} className={`w-[100px] cursor-pointer max-w-max  h-[70%] ${isNews ? "text-white bg-[#80808079]" : "text-black"} px-2 flex justify-center items-center text-black hover:bg-[#80808079] hover:text-white duration-500 transition-all rounded-full font-medium`}>News</span>
        <span onClick={handleActivites} className={`w-[100px] cursor-pointer max-w-max ${isActivites ? "text-white bg-[#80808079]" : "text-black"}  h-[70%] px-2 flex justify-center items-center text-black hover:bg-[#80808079] hover:text-white duration-500 transition-all rounded-full font-medium`}>Activities</span>
      </div>
      <div>
        {
          EventsObject.map((card, index) => (
            <div key={index}></div>
          ))
        }
      </div>
    </div>
  )
}
