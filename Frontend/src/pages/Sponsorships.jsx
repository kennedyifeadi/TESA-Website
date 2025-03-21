import React from 'react'
import { SponsorshipHeroSection } from '../components/SponsorshipHeroSection'
import { WhySponsor } from '../components/WhySponsor'

export const Sponsorships = () => {
  return (
    <div className='w-full h-maax flex flex-col relative'>
      <SponsorshipHeroSection/>
      <WhySponsor/>
    </div>
  )
}
