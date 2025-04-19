import React from 'react'
import TESA from "../../assets/images/logo.png"


export const Adverts = () => {
  const titles = ['Name', 'Desciption','Image']
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-0 w-full h-full opacity-15' style={{ backgroundImage: `url(${TESA})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <div className='relative flex flex-col w-full h-full pt-14 px-6 gap-6'>
        <div className='w-full flex h-[70px] border-b border-b-black  bg-gradient-to-r from-[#007AFF] to-[#FA8F21]'>
          {
            titles.map((title, index) => (
              <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 2 ? "border-r-none" : "border-r border-r-black"}`}>
                <h1 className=' text-white cursor-default'>{title}</h1>
              </div>
            ))
          }
        </div>
        <div className='w-full flex h-max'>klklflkefkl</div>
      </div>
    </div>
  )
}
