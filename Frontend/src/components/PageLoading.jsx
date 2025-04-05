import React, { useContext, useEffect, useState } from 'react'
import { DynamicBackground } from './DynamicBackground';
import Background from "../assets/images/HeroSectionBackground.jpg";
import TesaLogo from "../assets/images/logo.png"
import { NavContext } from '../context/NavContext';
import SplitText from "./Animations/SplitText";

export const PageLoading = () => {
    const [progress, setProgress] = useState(0)
    const {isLoading, setIsLoading} = useContext(NavContext)

    const handleAnimationComplete = () => {
      console.log('All letters have animated!');
    };

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
    <div className={`w-full h-screen absolute z-40 flex flex-col justify-center items-center duration-1000 transition-all ease-in-out ${isLoading ? "top-0 " : "top-[-200%]"}`}>
        <DynamicBackground imageUrl={Background}/>
        <div className='w-[30%] h-[40%] z-10'>
            <img src={TesaLogo} alt="" className='w-full h-full object-contain' />
        </div>
        <SplitText
  text="TESA Loading!!"
  className="text-2xl font-semibold text-center"
  delay={200}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
        <div className="w-[20%] h-[10px] rounded-full overflow-hidden bg-transparent z-10">
            <div className="h-full w-0 rounded-full transition-all duration-100 ease-linear" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #007AFF 22.22%, #FFF8D6 56.13%, #CF2317 90.48%)" }}></div>
        </div>
    </div>
  )
}
