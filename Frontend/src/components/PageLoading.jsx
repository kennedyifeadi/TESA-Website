import React, { useContext, useEffect, useState } from 'react'
import { DynamicBackground } from './DynamicBackground';
import Background from "../assets/images/HeroSectionBackground.jpg";
import TesaLogo from "../assets/images/tesaLogo.png"
import { NavContext } from '../context/NavContext';


export const PageLoading = () => {
    const [progress, setProgress] = useState(0)
    const {isLoading, setIsLoading} = useContext(NavContext)

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress >= 100) {
              clearInterval(interval);
              return 100;
            }
            return oldProgress + 2; 
          });
        }, 100);

        const timeout = setTimeout(() => {
            setIsLoading(false);
          }, 5000); 
      
          return () => {
            clearInterval(interval);
            clearTimeout(timeout);
          };
      }, [setIsLoading]);
  return (
    <div className={`w-full h-screen absolute z-40 flex flex-col justify-center items-center duration-1000 transition-all ease-in-out ${isLoading ? "top-0 " : "top-[-100%]"}`}>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-[30%] h-[40%] z-10'>
            <img src={TesaLogo} alt="" className='w-full h-full object-contain' />
        </div>
        <div className="w-[20%] h-[10px] rounded-full overflow-hidden bg-transparent z-10">
            <div className="h-full w-0 rounded-full transition-all duration-100 ease-linear" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #007AFF 22.22%, #FFF8D6 56.13%, #CF2317 90.48%)" }}></div>
        </div>
    </div>
  )
}
