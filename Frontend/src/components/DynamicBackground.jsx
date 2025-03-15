import React from 'react'

export const DynamicBackground = ({imageUrl}) => {
  return (
    <div
    className='w-full h-full absolute top-0 right-0 flex items-center justify-center bg-cover bg-center bg-no-repeat' 
    style={{backgroundImage: `url(${imageUrl})`}}
    ></div>
  )
}
