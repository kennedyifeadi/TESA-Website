import React from 'react'
import { SponsorshipHeroSection } from '../components/SponsorshipHeroSection'
import { WhySponsor } from '../components/WhySponsor'
import { Sponsors } from '../components/Sponsors'
import { BecomeASponsor } from '../components/BecomeASponsor'
import { motion } from "framer-motion"

export const Sponsorships = () => {
  return (
    <motion.div 
    initial = {{x:300}}
    animate = {{x:0}}
    transition={{duration: 1}}
    className='w-full h-max flex flex-col relative'>
      <SponsorshipHeroSection/>
      <WhySponsor/>
      <Sponsors/>
      <BecomeASponsor/>
    </motion.div>
  )
}
