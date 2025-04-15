import React from 'react'
import { NavLink } from 'react-router-dom'

export const SignIn = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='flex-1 h-full flex'>
        <form action="" className='w-full h-full flex flex-col justify-center items-center'>
          <div className='w-full flex flex-col'>
            <h1 className='text-xl md:text-2xl lg:text-4xl'>Welcome!</h1>
            <p className='text-md md:text-lg lg:text-xl'>Let’s get you signed in</p>
          </div>
          <div className='w-full flex flex-col'>
            <input type="text"  className='w-1/2 h-[50px] border-b border-none' placeholder='Enter Admin Name'/>
            <input type="password" className='w-1/2 h-[50px] border-b border-none' placeholder='Password' />
            <NavLink to={'/admin/forgotpassword'} className='text-sm text-[#003366]'><span>Forgot password?</span></NavLink>
          </div>
          <div>
            <button></button>
          </div>
        </form>
      </div>
      <div className='flex-1 h-full flex justify-center items-center'>
        <div className='w-[80%] h-[80%] rounded-3xl flex justify-center items-center'>
          <div className='w-[80%] border-[2px] border-dashed h-[40%] flex justify-center items-center'>
            <h1 className='text-xl md:text-4xl lg:text-7xl loaderScreen'>

            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
