import React from 'react'
import { FrameworkObject } from './FrameworkObject'
import arrow from '../assets/gifs/arrow.gif'

export const Framework = () => {
  return (
    <div className='relative gap-4 w-full h-[100dvh] items-center flex flex-col' style={{ background: "linear-gradient(91.03deg, #000000 -13.29%, #392B1A 122.75%)" }}>
      <div className='w-full h-max mt-10 flex justify-center'>
        <h1 className='bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent text-5xl'>THE TESA Framework</h1>
      </div>
      <div className='h-max mt-4 w-[392px] gap-4 flex flex-wrap' >
        {
          FrameworkObject.map((item, index)=>{
            return (
              <div key={index} className={`w-[120px] h-[120px]   ${item.id === 5 ? "bg-transparent rounded-full " : "bg-white rounded-md"} flex justify-center items-center`}>
                <img src={item.image} alt="" className={` ${item.id === 5 ? "w-full h-full object-cover" : "w-[60%]"}`} />
              </div>
            )
          })
        }
      </div>
      <div className='w-[100px] h-[70px]'>
        <img src={arrow} alt="" className='w-full h-full' />
      </div>
    </div>
  )
}
