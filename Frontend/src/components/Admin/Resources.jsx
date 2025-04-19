import React from 'react'
import TESA from "../../assets/images/logo.png"


export const AdminResources = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='relative w-full h-full opacity-15' style={{ backgroundImage: `url(${TESA})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <div className='relative flex flex-col w-full h-full pt-14 px-6 gap-6'>
        <div className='w-full flex h-[60px]'></div>
        <div className='w-full flex h-max'></div>
      </div>
    </div>
  )
}
