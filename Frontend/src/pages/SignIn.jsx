import React from 'react'

export const SignIn = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='flex-1 h-full flex'>
        <form action="" className='w-full h-full flex flex-col justify-center items-center'>
          <div>
            <h1></h1>
            <p></p>
          </div>
          <div>
            <input type="text" />
            <input type="text" />
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
