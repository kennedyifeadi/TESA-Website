import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Framework } from '../components/framework'
import { Executives } from '../components/executives'
import { Sponsorship } from '../components/Sponsorship'
import { About } from '../components/About'
import { TesaPress } from '../components/TesaPress'

export const LandingPage = () => {
  return (
    <div className='w-full h-max flex flex-col'>
        <HeroSection/>
        <Framework/>
        <Executives/>
        <Sponsorship/>
        <About/>
        <TesaPress/>
    </div>
  )
}
