import React from 'react'

export const ExecutivesBtn = ({text}) => {
  return (
    <div className='flex justify-center items-center md:rounded-[7px] rounded-lg w-[50%] h-full md:p-[2px] p-[1px] text-[8px] md:text-lg text-center md:leading-5 ' style={{background: "linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)"}}>
      <div className='w-full h-full flex justify-center items-center md:rounded-lg rounded-md bg-[#392B1A]'> {text}</div>
    </div>
  )
}
