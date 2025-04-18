import React from 'react'
import { SponsorshipHeroSection } from '../components/SponsorshipHeroSection'
import { WhySponsor } from '../components/WhySponsor'
import { Sponsors } from '../components/Sponsors'
import { BecomeASponsor } from '../components/BecomeASponsor'

export const Sponsorships = () => {
  return (
    <div     
    className='w-full h-max flex flex-col relative'>
      <SponsorshipHeroSection/>
      <WhySponsor/>
      <Sponsors/>
      <BecomeASponsor/>
    </div>
  )
}
