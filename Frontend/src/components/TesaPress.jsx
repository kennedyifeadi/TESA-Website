import React from 'react'
import { Button } from './UI/Button'
import { ImageGrid } from './TesaImageGrid'
import press1 from '../assets/images/press1.png'
import press2 from '../assets/images/press2.png'
import press3 from '../assets/images/press3.png'
import press4 from '../assets/images/press4.png'
import press5 from '../assets/images/press5.png'
import press6 from '../assets/images/press6.png'

export const TesaPress = () => {
  const images = [press1, press2, press3, press4, press5, press6]
  return (
    <div className='w-full h-[120dvh] md:gap-4 px-2 md:px-8 flex flex-col items-center py-10'>
      <h1 className='text-black text-3xl md:text-5xl w-full text-center' style={{ fontFamily: '"Aldrich", sans-serif' }}>TESA Press</h1>
      <p className='text-[#392B1A] w-full text-center text-[15px]'  style={{fontFamily:'"Poppins", sans-serif'}}>Stories about students, events, research and innovation across the faculty</p>
      <div className='w-full h-[80%]'>
        <ImageGrid images={images}/>
      </div>
      <div className='w-full h-[20%] flex justify-center items-center'>
        <Button title={"Read More"} color={"#392B1A"} hoverColor={"#392B1A"} />
      </div>
    </div>
  )
}
