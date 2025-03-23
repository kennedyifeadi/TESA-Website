import React from 'react'
import { ExecutivesCard } from './UI/ExecutivesCard'
import { ExecutivesObject } from './ExecutivesObject'
import { motion } from 'framer-motion'

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
              <motion.div
                initial = {{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: .5, delay: card.id / 5}}
                viewport={{once: true}}
                className='flex w-max h-max'>
                <ExecutivesCard key={index} Email={card.Email} Image={card.image} Instagram={card.Instagram} Level={card.Level} Name={card.Name} Position={card.Position} Twitter={card.Twitter} />
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}
