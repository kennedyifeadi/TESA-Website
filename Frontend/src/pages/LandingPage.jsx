import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Framework } from '../components/framework'

export const LandingPage = () => {
  return (
    <div className='w-full h-max flex flex-col'>
        <HeroSection/>
        <Framework/>
    </div>
  )
}
