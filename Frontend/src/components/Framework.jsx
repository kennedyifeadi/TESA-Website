import React from 'react';
import { FrameworkObject } from './FrameworkObject';
import arrow from '../assets/gifs/arrow.gif';
import { motion } from 'framer-motion';

export const Framework = () => {
  return (
    <div
      className="relative gap-4 pt-10 w-full h-[120dvh] flex flex-col items-center"
      style={{
        background: 'linear-gradient(91.03deg, #000000 -13.29%, #392B1A 122.75%)',
      }}
    >
      <div
        className="absolute top-[12.3vh] h-[2px] left-[max(-2vw,-1%)] rotate-[17deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(30vw, 40vw, 45vw)" }}
      ></div>

      <div
        className="absolute top-[12.3vh] h-[2px] right-[max(-2vw,-1%)] rotate-[-17deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      <div
        className="absolute bottom-[15.5vh] h-[2px] left-[max(-2vw,-2.5%)] rotate-[-22.5deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      <div
        className="absolute bottom-[15.5vh] bg-white h-[2px] right-[max(-2vw,-2.5%)] rotate-[22.5deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      <div className="w-full h-max flex justify-center">
        <h1 className="bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent text-5xl">
          THE TESA Framework
        </h1>
      </div>

      <div className="h-max mt-4 w-[40%] gap-4 flex flex-wrap justify-between z-10">
        {FrameworkObject.map((item, index) => (
          <motion.div
            initial = {{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: item.id / 10}}
            viewport={{once: true}}
            key={index}
            className={`w-[30%] h-[150px] flex justify-center items-center ${
              item.id === 5 ? 'bg-transparent rounded-full' : 'bg-white rounded-md'
            }`}
          >
            <img
              src={item.image}
              alt=""
              className={`${item.id === 5 ? 'w-full h-full object-cover' : 'w-[60%]'}`}
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
