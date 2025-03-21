import React, { useEffect, useState } from 'react'
import { DynamicBackground } from './DynamicBackground';
import Background from "../assets/images/HeroSectionBackground.jpg";


export const PageLoading = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress >= 100) {
              clearInterval(interval);
              setIsLoading(false);
              return 100;
            }
            return oldProgress + 2; // Increase progress gradually
          });
        }, 100); // Runs every 100ms
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='w-screen h-screen relative flex flex-col'>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-[40%] h-[50%]'>
            <img src="" alt="" className='w-full h-full object-cover' />
        </div>
        <div className="w-[40%] h-[10px] rounded-full overflow-hidden bg-transparent">
            <div className="h-full w-0 rounded-full transition-all duration-100 ease-linear bg-black" style={{ width: `${progress}%` }}></div>
        </div>
    </div>
  )
}
