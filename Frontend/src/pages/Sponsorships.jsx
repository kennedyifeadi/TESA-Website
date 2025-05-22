import React, { useEffect, useRef } from 'react'
import { SponsorshipHeroSection } from '../components/SponsorshipHeroSection'
import { WhySponsor } from '../components/WhySponsor'
import { Sponsors } from '../components/Sponsors'
import { BecomeASponsor } from '../components/BecomeASponsor'
import { useLocation } from 'react-router-dom'

export const Sponsorships = () => {
  const sponsorRef = useRef(null);
   const location = useLocation();

  const scrollToSponsorSection = () => {
    sponsorRef.current.scrollIntoView({ behavior: 'smooth' });
  };

    useEffect(() => {
    if (location.hash === '#become-sponsor') {
      const el = document.getElementById('become-sponsor-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div     
    className='w-full h-max flex flex-col relative'>
      <SponsorshipHeroSection onScrollClick={scrollToSponsorSection}/>
      <WhySponsor/>
      <Sponsors/>
      <div id="become-sponsor-section" ref={sponsorRef}>
        <BecomeASponsor />
      </div>
    </div>
  )
}
