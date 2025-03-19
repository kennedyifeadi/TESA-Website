import React from 'react';
import { FrameworkObject } from './FrameworkObject';
import arrow from '../assets/gifs/arrow.gif';

export const Framework = () => {
  return (
    <div
      className="relative gap-4 pt-10 w-full h-[120dvh] flex flex-col items-center"
      style={{
        background: 'linear-gradient(91.03deg, #000000 -13.29%, #392B1A 122.75%)',
      }}
    >
      {/* Top Left Line */}
      <div
        className="absolute top-[12.3vh] h-[2px] left-[max(-2vw,-1%)] rotate-[17deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(30vw, 40vw, 45vw)" }}
      ></div>

      {/* Top Right Line */}
      <div
        className="absolute top-[12.3vh] h-[2px] right-[max(-2vw,-1%)] rotate-[-17deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      {/* Bottom Left Line */}
      <div
        className="absolute bottom-[15.5vh] h-[2px] left-[max(-2vw,-2.5%)] rotate-[-22.5deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      {/* Bottom Right Line */}
      <div
        className="absolute bottom-[15.5vh] bg-white h-[2px] right-[max(-2vw,-2.5%)] rotate-[22.5deg]"
        style={{ background: 'linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)', width: "clamp(40vw, 40vw, 45vw)" }}
      ></div>

      {/* Title */}
      <div className="w-full h-max flex justify-center">
        <h1 className="bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent text-5xl">
          THE TESA Framework
        </h1>
      </div>

      {/* Boxes */}
      <div className="h-max mt-4 w-[40%] gap-4 flex flex-wrap justify-between z-10">
        {FrameworkObject.map((item, index) => (
          <div
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
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div className="w-[100px] h-[70px]">
        <img src={arrow} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
