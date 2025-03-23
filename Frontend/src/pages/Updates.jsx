import React from 'react'
import { Calender } from '../components/Calender'
import { Announcements } from '../components/Announcements'
import { Gallery } from '../components/Gallery'

export const Updates = () => {
  return (
    <div>
      <Calender/>
      <Announcements/>
      <Gallery/>
    </div>
  )
}
