import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Framework } from '../components/framework'
import { Executives } from '../components/executives'

export const LandingPage = () => {
  return (
    <div className='w-full h-max flex flex-col'>
        <HeroSection/>
        <Framework/>
        <Executives/>
    </div>
  )
}
