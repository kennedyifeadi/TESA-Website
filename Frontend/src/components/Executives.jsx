import React from 'react'
import { ExecutivesCard } from './UI/ExecutivesCard'
import { ExecutivesObject } from './ExecutivesObject'

export const Executives = () => {
  return (
    <div className='flex flex-col gap-2 py-10 w-full h-max bg-[#07101B] px-8 relative'>
      <div className='w-full mb-10 h-max flex justify-center itmes-center'>
        <h1 className='text-white font-semibold w-full text-center text-5xl h-full justify-center items-center' style={{ fontFamily: '"Aldrich", sans-serif' }} >Meet the Executives</h1>
      </div>
      <div className='flex flex-wrap w-full px-6 h-max gap-4 justify-center '>
        {
          ExecutivesObject.map((card, index)=>{
            return(
              <ExecutivesCard key={index} Email={card.Email} Image={card.image} Instagram={card.Instagram} Level={card.Level} Name={card.Name} Position={card.Position} Twitter={card.Twitter} />
            )
          })
        }
      </div>
    </div>
  )
}
