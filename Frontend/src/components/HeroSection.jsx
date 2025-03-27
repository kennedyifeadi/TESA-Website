import React, { useState, useEffect } from "react";
import { DynamicBackground } from "./DynamicBackground";
import Background from "../assets/images/HeroSectionBackground.jpg";
import supportTesa from "../assets/icons/Vector.png";
import technology from "../assets/gifs/engineerCap.gif";
import engineer from "../assets/images/engineer.png";
import supportHover from "../assets/icons/hand-coin-fill.png";
import playbtn from "../assets/icons/Symbol.png";
import { Button } from "./UI/Button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartAnimation(true);
    }, 0); // Small delay after mount for better effect
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="flex h-screen w-full relative px-8 items-end justify-center">
      <DynamicBackground imageUrl={Background} />
      <div className="w-full h-[80%] md:h-[90%] flex flex-col-reverse md:flex-row z-10 md:px-6">
        <div className="flex flex-col h-[50%] md:h-full w-full md:w-[40%] justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-9xl tracking-[20px] md:tracking-[40px] md:leading-20 text-[#1E1E1E]"
              style={{ fontFamily: '"Aldrich", sans-serif' }}
            >
              TESA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={startAnimation ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 md:mb-8 w-[150%]"
          >
            <h3
              className="text-[13px] md:text-xl text-[#392B1A] flex flex-col"
              style={{ fontFamily: '"Aldrich", sans-serif' }}
            >
              TECHNOLOGY AND ENGINEERING STUDENTS’ <span>ASSOCIATION</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:mb-4 mb-2"
          >
            <p
              className="text-[#392B1A] md:tracking-[1px] text-[10px] md:text-[15px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Welcome to the hub of future tech leaders and engineering pioneers.
              A dynamic world where creativity meets technology, and innovation
              knows no bounds. Join us in shaping the future, one breakthrough at
              a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              color={"#392B1A"}
              width={"20px"}
              title={"Support TESA"}
              icon={supportTesa}
              hoverColor={"#007AFF"}
              hoverIcon={supportHover}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex h-[50%] md:h-full w-full md:w-[60%] items-center md:items-end z-10 relative"
        >
          <img
            src={technology}
            alt=""
            className="absolute w-[70%] md:w-full bottom-10 h-[70%] md:h-[90%] left-[30px] md:left-[0px] object-cover md:object-contain"
          />
          <img
            src={engineer}
            alt=""
            className="h-full w-full object-cover md:object-cover"
            style={{ objectPosition: "-20px" }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={`absolute flex items-center justify-center text-white gap-2 cursor-pointer z-10 transition-all bottom-2 h-8 duration-500 ease-in-out rounded-full bg-[#007AFF] ${
          isHovered ? "w-24" : "w-16"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={playbtn} alt="" className="w-3 transition-all duration-500" />
        <span
          className={`transition-opacity duration-1000 ${
            isHovered ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}
        >
          play
        </span>
      </motion.div>
    </div>
  );
};
