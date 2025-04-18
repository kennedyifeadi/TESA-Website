import React from 'react'
import { NavLink } from 'react-router-dom'
import { DynamicBackground } from '../components/DynamicBackground'
import ConstuctionCap from "../assets/images/ConstructionCap.png"

export const SignIn = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='flex-1 h-full flex'>
        <form action="" className='w-full h-full flex flex-col justify-center items-center px-10 gap-2 lg:gap-6'>
          <div className='w-full flex flex-col gap-2' >
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold' style={{ fontFamily: '"Aldrich", sans-serif' }}>Welcome!</h1>
            <p className='text-md md:text-lg lg:text-xl'>Let’s get you signed in</p>
          </div>
          <div className='w-full flex flex-col gap-2 mt-6'>
            <input type="text"  className='w-1/2 h-[50px] outline-0 border-b border-b-[#392B1A]' placeholder='Enter Admin Name'/>
            <input type="password" className='w-1/2 h-[50px] outline-0 border-b border-b-[#392B1A]' placeholder='Password' />
            <NavLink to={'/admin/forgotpassword'} className='text-sm w-max text-[#003366] mt-2 md:mt-4 lg:mt-6'><span>Forgot password?</span></NavLink>
          </div>
          <div className='w-full h-max mt-2'>
            <button className='h-[50px] active:scale-95 duration-500 ease-in-out bg-[#392B1A] w-1/2 rounded-md text-white font-medium'>Sign in</button>
          </div>
        </form>
      </div>
      <div className='flex-1 h-full flex justify-center items-center relative'>
        <DynamicBackground imageUrl={ConstuctionCap} />
        <div className='w-[80%] h-[80%] rounded-3xl flex justify-center items-center relative'>
          <div className='w-[80%] border-[2px] border-dashed h-[40%] flex justify-center items-center border-white rounded-sm'>
            <h1 className='text-xl md:text-4xl font-light loaderScreen uppercase text-white text-center leading-24'>
              Welcome <br /> Back
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
