import React from 'react'
import { Calender } from '../components/Calender'
import { Announcements } from '../components/Announcements'
import { Gallery } from '../components/Gallery'
import { motion } from 'framer-motion'

export const Updates = () => {
  return (
    <motion.div
    initial = {{x:300}}
    animate = {{x:0}}
    transition={{duration: 1}}
    className='w-full flex flex-col relative h-max'>
      <Calender/>
      <Announcements/>
      <Gallery/>
    </motion.div>
  )
}
