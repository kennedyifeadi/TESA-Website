import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Framework } from '../components/Framework'
import { Sponsorship } from '../components/Sponsorship'
import { About } from '../components/About'
import { TesaPress } from '../components/TesaPress'
import { Newsletter } from '../components/Newsletter'
import { Location } from '../components/Location'
import { Socials } from '../components/Socials'
import { Footer } from '../components/Footer'
import { Executives } from '../components/Executives'

export const LandingPage = () => {
  return (
    <div className='w-full h-max flex flex-col'>
        <HeroSection/>
        <Framework/>
        <Executives/>
        <Sponsorship/>
        <About/>
        <TesaPress/>
        <Newsletter/>
        <Location/>
        <Socials/>
        <Footer/>
    </div>
  )
}
