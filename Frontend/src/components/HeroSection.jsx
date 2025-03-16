import React from "react";
import { DynamicBackground } from "./DynamicBackground";
import Background from "../assets/images/HeroSectionBackground.jpg";
import supportTesa from "../assets/icons/Vector.png"
import technology from "../assets/gifs/engineerCap.gif"
import engineer from "../assets/images/engineer.png"
import supportHover from "../assets/icons/hand-coin-fill.png"
import { Button } from "./UI/Button";

export const HeroSection = () => {
  return (
    <div className="flex h-[100dvh] w-full relative px-8 items-end">
      <DynamicBackground imageUrl={Background} />
      <div className="w-full h-[90%] flex  border-l-[1px] border-[#07101B] border-r-[1px] z-10 px-6">
      <div className="flex flex-col h-full w-[40%] justify-center">
        <div>
          <h1 className="text-9xl tracking-[40px] leading-20 text-[#1E1E1E]" style={{ fontFamily: '"Aldrich", sans-serif' }} >TESA</h1>
        </div>
        <div className="mb-8">
          <h3 className="text-xl text-[#392B1A] " style={{ fontFamily: '"Aldrich", sans-serif' }}>TECHNOLOGY AND ENGINEERING STUDENTS’ ASSOCIATION</h3>
        </div>
        <div className="mb-4">
          <p className="text-[#392B1A] tracking-[1px] text-[15px]" style={{fontFamily:'"Poppins", sans-serif'}}>
            Welcome to the hub of future tech leaders and engineering pioneers.
            A dynamic world where creativity meets technology, and innovation
            knows no bounds. Join us in shaping the future, one breakthrough at
            a time.
          </p>
        </div>
        <div className="w-max h-max">
          <Button color={"#392B1A"} title={"Support TESA"} icon={supportTesa} hoverColor={"#007AFF"}hoverIcon={supportHover} />
        </div>
      </div>
      <div className="flex h-full w-[60%] items-end z-10 relative">
        <img src={technology} alt="" className="absolute bottom-10 h-[80%] left-[110px] object-contain"/>
        <img src={engineer} alt="" className="h-[90%] w-full object-cover " style={{objectPosition: "30px"}}  />
      </div>
      </div>
    </div>
  );
};
