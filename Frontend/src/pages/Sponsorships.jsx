import React from 'react'
import { SponsorshipHeroSection } from '../components/SponsorshipHeroSection'
import { WhySponsor } from '../components/WhySponsor'
import { Sponsors } from '../components/Sponsors'

export const Sponsorships = () => {
  return (
    <div className='w-full h-maax flex flex-col relative'>
      <SponsorshipHeroSection/>
      <WhySponsor/>
      <Sponsors/>
    </div>
  )
}
