import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Framework } from '../components/framework'
import { Executives } from '../components/executives'
import { Sponsorship } from '../components/Sponsorship'
import { About } from '../components/About'
import { TesaPress } from '../components/TesaPress'
import { Newsletter } from '../components/Newsletter'
import { Location } from '../components/Location'
import { Socials } from '../components/Socials'
import { Footer } from '../components/footer'

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
