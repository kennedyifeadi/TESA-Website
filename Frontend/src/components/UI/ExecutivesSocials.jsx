import React from 'react'

export const ExecutivesSocials = ({logo, link}) => {
  return (
    <div className='h-full flex justify-center items-center bg-transparent flex-1'>
      <a href={link} className='w-full h-full'>
        <img src={logo} alt="" className='w-full h-full object-contain' />
      </a>
    </div>
  )
}
