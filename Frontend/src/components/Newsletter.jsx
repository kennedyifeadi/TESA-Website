import React from 'react'
import mailbox from '../assets/images/mailbox.png'
import cloud from '../assets/images/Union.png'

export const Newsletter = () => {
  return (
    <div className='w-full h-[100dvh] flex px-8 bg-[#392B1A] justify-center items-center'>
      <div className='w-[30%] h-full flex justify-center items-center px-6 relative'>
        <div className='w-full h-[50%] rounded-md' style={{background: "linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)"}}></div>
        <div className='absolute w-full bottom-0 flex h-[70%] justify-center'>
          <div className='flex h-[10%] w-full top-0 absolute '>
            <img src={cloud} alt="" className='absolute top-3 left-10  w-[20%] h-full' />
            <img src={cloud} alt="" className='absolute top-0 left-40 w-[20%] h-full'/>
            <img src={cloud} alt="" className='absolute top-3 right-10 w-[20%] h-full' />
          </div>
          <div className='h-[100%] w-full flex justify-center items-center'>
            <img src={mailbox} alt="" className='h-[90%] w-full object-cover' />
          </div>
        </div>
      </div>
      <div className='w-[70%] flex gap-4 flex-col h-full justify-center p-4 px-10'>
        <h1 className='w-[50%] text-white text-5xl font-semibold'>Subscribe to our Newsletter!</h1>
        <p className='text-[#908F8F] text-[18px]'>Be the first to get exclusive offers and the latest news</p>
        <form action="" className='w-full mt-4 h-max flex flex-col gap-4'>
          <input type="text" className='w-[50%] outline-none px-4 border-[#908F8F] border rounded-lg text-[#908F8F] h-[50px]' placeholder='Enter your email address' />
          <button className='w-full h-[50px] cursor-pointer rounded-sm font-medium text-white' style={{background: "linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)"}}>Subscribe</button>
        </form>
      </div>
    </div>
  )
}
