import React from 'react'
import background from "../assets/images/becomeaSponsorBG.jpg"
import { DynamicBackground } from './DynamicBackground'
import { Button } from './UI/Button'
export const BecomeASponsor = () => {
  return (
    <div className='w-full h-screen relative' style={{ fontFamily: '"Poppins", sans-serif' }}>
      <DynamicBackground imageUrl={background}/>
      <form className='flex justify-center gap-8 absolute top-0 flex-col bg-[#222121c9] items-center w-full h-full p-14'>
        <h1 className='font-bold text-3xl'>Become a Sponsor</h1>
        <div className='w-full gap-8 h-[50px] flex justify-center'>
          <input type="text" name='name' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Name' />
          <input type="text" name='company' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Company Name' />
        </div>
        <div className='w-full gap-8 h-[50px] flex justify-center'>
          <input type="text" name='mobile' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Mobile' />
          <input type="text" name='email' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Email' />
        </div>
        <div className='w-full h-[200px] flex justify-center'>
          <textarea name="message" id="" className=' rounded-md  border-2 pl-4 pt-2 w-full h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='message'></textarea>
        </div>
        <div>
          <button className='cursor-pointer bg-[#007AFF] flex justify-center items-center text-white w-[10rem] h-10 gap-2 font-medium rounded-md duration-500'>Submit</button>
        </div>
      </form>
    </div>
  )
}
