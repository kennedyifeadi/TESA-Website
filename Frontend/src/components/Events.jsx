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
  <div key={index} className='w-full min-h-[80px] md:min-h-[60px] flex mb-3 md:mb-0'>
    {/* Date Section */}
    <div className='flex flex-col w-[15%] sm:w-[12%] md:w-[7%] h-full justify-start pt-1'>
      <span className='text-[#908F8F] text-[11px] sm:text-[12px] md:text-[14px] font-medium leading-tight'>
        {card.day}
      </span>
      <span className='text-[#908F8F] text-[10px] sm:text-[11px] md:text-[14px] leading-tight'>
        {card.year}
      </span>
    </div>
    
    {/* Content Section */}
    <div className={`flex flex-col w-[85%] sm:w-[88%] md:w-[93%] h-full relative pl-3 md:pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-[2px] ${
      card.category === "News" ? "before:bg-[#FA8F21]" : 
      card.category === "Activities" ? "before:bg-[#09FF00]" : 
      "before:bg-[#007AFF]"
    }`}>
      {/* Title */}
      <h3 className='text-[16px] sm:text-[18px] md:text-xl font-medium mb-1 md:mb-2 leading-tight text-gray-900'>
        {card.Title}
      </h3>
      
      {/* Content */}
      <p className='text-[#908F8F] text-[12px] sm:text-[13px] md:text-[13px] leading-relaxed line-clamp-3 md:line-clamp-none'>
        {card.Content}
      </p>
      
      {/* Category Badge (Optional - shows on mobile for better context) */}
      <div className='mt-2 md:hidden'>
        <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-medium ${
          card.category === "News" ? "bg-[#FA8F21] bg-opacity-10 text-[#a85809]" : 
          card.category === "Activities" ? "bg-[#09FF00] bg-opacity-10 text-green-700" : 
          "bg-[#007AFF] bg-opacity-10 text-[#007AFF]"
        }`}>
          {card.category}
        </span>
      </div>
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