import React from 'react'
import { Calendar } from '../components/Calender'
import { Announcements } from '../components/Announcements'
import { Gallery } from '../components/Gallery'

export const Updates = () => {
  return (
    <div
  
    className='w-full flex flex-col relative h-max'>
      <Calendar/>
      <Announcements/>
      <Gallery/>
    </div>
  )
}
