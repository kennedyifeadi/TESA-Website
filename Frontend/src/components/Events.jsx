import React, { useState, useMemo } from 'react'
import { EventsObject } from './EventsObject'

export const Events = ({ searchTerm = '' }) => {
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

  // Filter events based on search term
  const filteredEvents = useMemo(() => {
    if (!searchTerm.trim()) return EventsObject

    return EventsObject.filter(event => 
      event.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.Content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  // Get events to display based on current filter and search
  const eventsToDisplay = useMemo(() => {
    if (isAll) {
      return filteredEvents
    } else if (isNews) {
      return filteredEvents.filter(card => card.category === "News")
    } else if (isActivites) {
      return filteredEvents.filter(card => card.category === "Activities")
    }
    return []
  }, [isAll, isNews, isActivites, filteredEvents])

  const renderEventCard = (card, index) => (
    <div key={index} className='w-full h-[10%] md:h-[14%] flex mb-4'>
      <div className='flex flex-col w-[20%] md:w-[7%] h-full'>
        <span className='text-[#908F8F] text-[14px]'>{card.day}</span>
        <span className='text-[#908F8F] text-[14px]'>{card.year}</span>
      </div>
      <div className={`flex flex-col w-[80%] md:w-[90%] h-full relative before:absolute before:top-0 before:left-[-10px] before:h-full before:w-[2px] ${
        card.category === "News" ? "before:bg-[#FA8F21]" : 
        card.category === "Activities" ? "before:bg-[#09FF00]" : 
        "before:bg-[#007AFF]"
      }`}>
        <span className='text-xl'>{card.Title}</span>
        <span className='text-[#908F8F] text-[13px]'>{card.Content}</span>
      </div>
    </div>
  )

  return (
    <div className='w-full h-full flex flex-col gap-2 md:gap-4 py-2 md:py-6 md:px-6'>
      <div className='w-full h-[10%] flex justify-start items-center gap-2 md:gap-4'>
        <span 
          onClick={handleAll} 
          className={`w-[100px] cursor-pointer max-w-max ${isAll ? "text-black" : "text-[#80808079]"} h-[70%] px-2 flex justify-center items-center hover:text-black duration-500 transition-all rounded-full font-medium`}
        >
          All
        </span>
        <span 
          onClick={handleNews} 
          className={`w-[100px] cursor-pointer max-w-max h-[70%] ${isNews ? "text-black" : "text-[#80808079]"} px-2 flex justify-center items-center hover:text-black duration-500 transition-all rounded-full font-medium`}
        >
          News
        </span>
        <span 
          onClick={handleActivites} 
          className={`w-[100px] cursor-pointer max-w-max ${isActivites ? "text-black" : "text-[#80808079]"} h-[70%] px-2 flex justify-center items-center hover:text-black duration-500 transition-all rounded-full font-medium`}
        >
          Activities
        </span>
      </div>
      
      <div className='w-full h-[90%] overflow-auto'>
        {eventsToDisplay.length > 0 ? (
          eventsToDisplay.map(renderEventCard)
        ) : (
          <div className='w-full h-full flex justify-center items-center'>
            <span className='text-[#908F8F] text-lg'>
              {searchTerm ? `No results found for "${searchTerm}"` : 'No events available'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}