import React from 'react'
import TESA from "../../assets/images/logo.png"

export const Dashboard = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='relative w-full h-full opacity-15' style={{ backgroundImage: `url(${TESA})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <div className='relative'></div>
    </div>
  )
}
