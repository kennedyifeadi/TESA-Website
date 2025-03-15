import React from 'react'
import { DynamicBackground } from './DynamicBackground'
import Background from '../assets/images/HeroSectionBackground.jpg'
import { Button } from './UI/Button'

export const HeroSection = () => {
  return (
    <div className='flex h-[100dvh] w-full relative px-1 border-l-[1px] border-[#07101B] border-r-[1px]'>
      <DynamicBackground imageUrl={Background}/>
      <div className='flex flex-col h-full items-center z-10'>
        <div>
          <h1></h1>
        </div>
        <div>
          <h3>

          </h3>
        </div>
        <div>
          <p>

          </p>
        </div>
        <div>
          <Button/>
        </div>
      </div>
      <div className='flex h-full items-end z-10'>
      </div>
    </div>
  )
}
