import React from 'react'

export const ExecutivesBtn = ({text}) => {
  return (
    <div className='flex justify-center items-center rounded-[8px] w-[50%] h-full p-[2px] ' style={{background: "linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)"}}>
      <div className='w-full h-full flex justify-center items-center rounded-[6px] bg-[#392B1A]'> {text}</div>
    </div>
  )
}
