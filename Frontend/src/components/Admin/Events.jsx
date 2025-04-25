import React, { useState } from 'react'
import TESA from "../../assets/images/logo.png"
import { Field } from './Field'

export const AdminEvents = () => {
  const [isclicked, setIsClicked] = useState(false)
  const titles = ['Name', 'Subtext', 'Date', 'Time', 'Category']
  const pastTitles = ['Name', 'SubText', 'Date', 'Category']
  
  // State to track upcoming events
  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, name: "Name", subtext: "Subtext", date: "Date", time: "Time", category: "Category" }
  ]);
  
  // State to track past events
  const [pastEvents, setPastEvents] = useState([
    { id: 1, name: "Name", subtext: "SubText", date: "Date", category: "Category" }
  ]);

  const handlePastEvents = () => {
    setIsClicked(true)
  }
  
  const handleUpcomingEvents = () => {
    setIsClicked(false)
  }
  
  // Function to add a new upcoming event
  const addNewUpcomingEvent = () => {
    const newId = upcomingEvents.length > 0 ? Math.max(...upcomingEvents.map(event => event.id)) + 1 : 1;
    setUpcomingEvents([...upcomingEvents, { 
      id: newId, 
      name: "Name", 
      subtext: "Subtext", 
      date: "Date", 
      time: "Time", 
      category: "Category"
    }]);
  }
  
  // Function to add a new past event
  const addNewPastEvent = () => {
    const newId = pastEvents.length > 0 ? Math.max(...pastEvents.map(event => event.id)) + 1 : 1;
    setPastEvents([...pastEvents, { 
      id: newId, 
      name: "Name", 
      subtext: "SubText", 
      date: "Date",
      category: "Category" 
    }]);
  }

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
            !isclicked ? (
              <div className='w-full flex h-[70px] border-b border-b-black bg-gradient-to-r from-[#007AFF] to-[#FA8F21]' style={{ fontFamily: '"Aldrich", sans-serif' }}>
                {
                  titles.map((title, index) => (
                    <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 4 ? "border-r-none" : "border-r border-r-black"}`}>
                      <h1 className='text-white cursor-default'>{title}</h1>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className='w-full flex h-[70px] border-b border-b-black bg-gradient-to-r from-[#007AFF] to-[#FA8F21]' style={{ fontFamily: '"Aldrich", sans-serif' }}>
                {
                  pastTitles.map((title, index) => (
                    <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 3 ? "border-r-none" : "border-r border-r-black"}`}>
                      <h1 className='text-white cursor-default'>{title}</h1>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
        
        {/* Events Fields */}
        <div className='w-full flex flex-col h-max before:absolute relative before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-[#007AFF] before:to-[#FA8F21]
        after:absolute after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-[#007AFF] after:to-[#FA8F21]
        '>
          {
            !isclicked ? (
              // Upcoming Events
              upcomingEvents.map((event) => (
                <Field 
                  key={event.id}
                  name={event.name} 
                  subtext={event.subtext} 
                  date={event.date} 
                  time={event.time} 
                  category={event.category}
                  endpoint={"postEvent"}
                />
              ))
            ) : (
              // Past Events
              pastEvents.map((event) => (
                <Field 
                  key={event.id}
                  name={event.name} 
                  subtext={event.subtext} 
                  date={event.date}
                  category={event.category}
                  endpoint={"postEvent"}
                />
              ))
            )
          }
        </div>
        
        {/* Add New Event Button */}
        <div 
          onClick={!isclicked ? addNewUpcomingEvent : addNewPastEvent} 
          className='w-full h-[50px] border border-[#8080809f] cursor-pointer active:scale-90 duration-500 ease-in-out rounded-lg flex justify-center items-center bg-[#ffffffc2]'
        >
          Add New {!isclicked ? "Upcoming" : "Past"} Event
        </div>
      </div>
    </div>
  )
}