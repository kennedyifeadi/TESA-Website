import React from 'react';
import { FrameworkObject } from './FrameworkObject';
import arrow from '../assets/gifs/arrow.gif';
import { motion } from 'framer-motion';

export const Framework = () => {
  return (
    <div
      className="relative gap-4 pt-10 w-full h-max md:h-[120dvh] flex flex-col items-center"
      style={{
        background: 'linear-gradient(91.03deg, #000000 -13.29%, #392B1A 122.75%)',
      }}
    >
      <div
        className="absolute md:top-[12.3vh] h-[2px] md:left-[max(-2vw,-1%)] md:rotate-[17deg] left-[-15dvw] rotate-[70deg] top-[7dvh]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(30vw, 40vw, 45vw)" }}
      ></div>

      <div
        className="absolute md:top-[12.3vh] h-[2px] md:right-[max(-2vw,-1%)] md:rotate-[-17deg] right-[-15dvw] rotate-[-70deg] top-[7dvh]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      <div
        className="absolute md:bottom-[15.5vh] h-[2px] md:left-[max(-2vw,-2.5%)] md:rotate-[-22.5deg] left-[-15dvw] rotate-[-65deg] bottom-[7dvh]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      <div
        className="absolute md:bottom-[15.5vh] bg-white h-[2px] md:right-[max(-2vw,-2.5%)] md:rotate-[22.5deg] right-[-15dvw] rotate-[65deg] bottom-[7dvh]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      <div className="w-full h-max flex justify-center">
        <h1 className="bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent text-3xl md:text-5xl">
          THE TESA Framework
        </h1>
      </div>

      <div className="h-max mt-4 w-[80%] md:w-[40%] gap-y-4 flex flex-wrap justify-between z-10">
        {FrameworkObject.map((item, index) => (
          <motion.div
            initial = {{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: item.id / 10}}
            viewport={{once: true}}
            key={index}
            className={`w-[30%] h-[90px] md:h-[150px] flex justify-center items-center ${
              item.id === 5 ? 'bg-transparent rounded-full' : 'bg-white rounded-md'
            }`}
          >
            <img
              src={item.image}
              alt=""
              className={`${item.id === 4 ? 'w-full h-full object-cover' : 'w-full h-full object-contain rounded-md'}`}
            />
          </motion.div>
        ))}
      </div>

      <div className="w-[100px] h-[70px]">
        <img src={arrow} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
