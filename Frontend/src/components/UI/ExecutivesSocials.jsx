import React from 'react'

export const ExecutivesSocials = ({logo, link}) => {
  return (
    <div className='h-full flex justify-center items-center bg-transparent flex-1'>
      <a href={link} target="_blank" rel="noopener noreferrer" className='w-full h-full z-10'>
        <img src={logo} alt="" className='w-full h-full object-contain' />
      </a>
    </div>
  )
}
