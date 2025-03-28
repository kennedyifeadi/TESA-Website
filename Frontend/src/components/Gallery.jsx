import React from 'react'
import { DynamicBackground } from './DynamicBackground'
import eventBG from "../assets/images/eventBG.jpg"
import subtract from "../assets/images/galleryBG.jpg"
import { ImageGrid } from './TesaImageGrid'
import gallery1 from '../assets/images/gallery1.png'
import gallery2 from '../assets/images/gallery2.png'
import gallery3 from '../assets/images/gallery3.png'
import gallery4 from '../assets/images/gallery4.png'
import gallery5 from '../assets/images/gallery5.png'
import gallery6 from '../assets/images/gallery6.png'
import { motion } from 'framer-motion'

export const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]
  return (
    <div className='h-[300dvh] w-full flex flex-col relative'>
      <DynamicBackground imageUrl={eventBG}/>
      <div className='z-10 bg-[#000000f1] justify-between w-full h-full flex flex-col p-2 md:p-14 gap-2 md:gap-8'>
        <h1 style={{ fontFamily: '"Aldrich", sans-serif' }} className='w-full text-center text-white text-2xl md:text-4xl'>Events Gallery</h1>
        <div className='w-full h-[85%] flex flex-col gap-2 md:gap-10'>
          <div className='z-10 w-full h-[30%] rounded-xl'>
            <img src={subtract} alt="" className='w-full h-full object-cover rounded-xl'/>
          </div>
          <div className='z-10 w-full h-[35%]'>
                <div className="grid grid-cols-3 h-full gap-2 grid-rows-3 w-full mx-auto">
            {images.map((src, index) => (
              <motion.div
              initial = {{opacity: 0, scale: 0.5}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.8, delay: index / 10}}
              viewport={{once: true}}
                key={index}
                className={`rounded-lg overflow-hidden ${
                  index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <img src={src} alt={`image-${index}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          </div>
          <div className='z-10 w-full h-[35%]'>
          <div className="grid grid-cols-3 gap-2 h-full grid-rows-3 w-full mx-auto">
      {images.map((src, index) => (
        <motion.div
        initial = {{opacity: 0, scale: 0.5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.8, delay: index / 10}}
        viewport={{once: true}}
          key={index}
          className={`rounded-lg overflow-hidden ${
            index === 3 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }`}
        >
          <img src={src} alt={`image-${index}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center h-[5%]'>
          <span className='w-[40%] md:w-[12%] flex text-2xl justify-center items-center cursor-pointer h-[50%] rounded-md text-white bg-[#007AFF]'>View More</span>
        </div>
      </div>
    </div>
  )
}