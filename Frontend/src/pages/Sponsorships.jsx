import React, { useRef } from 'react'
import { SponsorshipHeroSection } from '../components/SponsorshipHeroSection'
import { WhySponsor } from '../components/WhySponsor'
import { Sponsors } from '../components/Sponsors'
import { BecomeASponsor } from '../components/BecomeASponsor'

export const Sponsorships = () => {
  const sponsorRef = useRef(null);

  const scrollToSponsorSection = () => {
    sponsorRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div     
    className='w-full h-max flex flex-col relative'>
      <SponsorshipHeroSection onScrollClick={scrollToSponsorSection}/>
      <WhySponsor/>
      <Sponsors/>
      <div ref={sponsorRef}>
        <BecomeASponsor />
      </div>
    </div>
  )
}
