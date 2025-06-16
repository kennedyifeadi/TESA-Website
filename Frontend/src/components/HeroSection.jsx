import React, { useState, useEffect } from "react";
import { DynamicBackground } from "./DynamicBackground";
import Background from "../assets/images/HeroSectionBackground.jpg";
import supportTesa from "../assets/icons/Vector.png";
import technology from "../assets/gifs/engineerCap.gif";
import engineer from "../assets/images/engineer.png";
import supportHover from "../assets/icons/hand-coin-fill.png";
import playbtn from "../assets/icons/Symbol.png";
import { Button } from "./UI/Button";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartAnimation(true);
    }, 0);
    return () => clearTimeout(delay);
  }, []);

  const leftHoverVariants = {
    hover: { width: "auto", opacity: 1, x: "-100%" },
    initial: { width: 0, opacity: 0, x: 0 },
  };

  const rightHoverVariants = {
    hover: { width: "auto", opacity: 1, x: "100%" },
    initial: { width: 0, opacity: 0, x: 0 },
  };

  return (
    <div className="flex h-screen w-full relative md:px-8 items-end justify-center z-10">
      <DynamicBackground imageUrl={Background} />

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full h-[90%] flex-row z-10 px-6">
        <div className="flex flex-col h-full w-[40%] justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl lg:text-9xl tracking-[40px] leading-20 text-[#1E1E1E]" style={{ fontFamily: '"Aldrich", sans-serif' }}>
              TESA
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={startAnimation ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 w-[150%]"
          >
            <h3 className="text-xl text-[#392B1A] flex flex-col" style={{ fontFamily: '"Aldrich", sans-serif' }}>
              TECHNOLOGY AND ENGINEERING STUDENTS' <span>ASSOCIATION</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-4"
          >
            <p className="text-[#392B1A] tracking-[1px] text-[15px]" style={{ fontFamily: '"Poppins", sans-serif' }}>
              TESA, University of Ibadan, unites over 3,000 students across nine departments in the Faculty of Technology. We champion excellence in academics, innovation, leadership, and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full flex justify-start"
          >
            <Link to="/sponsorship#become-sponsor" >
            <Button
              color={"#392B1A"}
              width={"20px"}
              title={"Support TESA"}
              icon={supportTesa}
              hoverColor={"#007AFF"}
              hoverIcon={supportHover}
            />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex h-full w-[60%] items-end z-10 relative"
        >
          <img src={technology} alt="" className="absolute w-[50%] bottom-14 h-[70%] left-[100px] object-contain" />
          <img src={engineer} alt="" className="h-full w-full object-contain" />
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full h-[90%] flex flex-col z-10 px-6 pb-8 justify-center">
        <div className="flex flex-col justify-center items-center h-[70%] text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-7xl tracking-[20px] text-[#1E1E1E]"
            style={{ fontFamily: '"Aldrich", sans-serif' }}
          >
            TESA
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[13px] text-[#392B1A] my-3"
            style={{ fontFamily: '"Aldrich", sans-serif' }}
          >
<Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("TECHNOLOGY AND ENGINEERING STUDENTS’ ASSOCIATION")
          .start(); // no .pauseFor or .deleteAll — just type and stop
      }}
      options={{
        autoStart: true,
        loop: false,
        delay: 100,
        cursor: "|",
        skipAddStyles: true,
        cursorClassName: "text-[#007AFF]",
      }}
    />
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#392B1A] text-[11px] px-2 mb-4"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Welcome to the hub of future tech leaders and engineering pioneers.
            A dynamic world where creativity meets technology, and innovation knows no bounds.
          </motion.p>
        </div>

        <div className="flex flex-col h-[20%] justify-end items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={startAnimation ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full flex justify-center"
          >
            <div className="flex justify-center gap-6 w-full relative">
              {/* Left Dot */}
              <motion.div
                whileHover="hover"
                initial="initial"
                className="relative w-8 h-8 z-10"
              >
                <motion.div
                  className="w-8 h-8 bg-[#392B1A] rounded-full opacity-80"
                  animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#392B1A] text-white text-[10px] whitespace-nowrap px-2 py-1 rounded-full origin-right overflow-hidden"
                  variants={leftHoverVariants}
                >
                  Where Great Minds Lie
                </motion.div>
              </motion.div>

              {/* Center Dot */}
              <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.3, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                className="w-12 h-12 bg-[#007AFF] rounded-full opacity-80"
              />

              {/* Right Dot */}
              <motion.div
                whileHover="hover"
                initial="initial"
                className="relative w-8 h-8 z-10"
              >
                <motion.div
                  className="w-8 h-8 bg-[#392B1A] rounded-full opacity-80"
                  animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.7, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
                />
                <motion.div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#392B1A] text-white text-[10px] whitespace-nowrap px-2 py-1 rounded-full origin-left overflow-hidden"
                  variants={rightHoverVariants}
                >
                  The Best Faculty
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Support Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full flex justify-center mb-4"
          >
            <Link to="/sponsorship#become-sponsor" >
            <Button
              color={"#392B1A"}
              width={"20px"}
              title={"Support TESA"}
              icon={supportTesa}
              hoverColor={"#007AFF"}
              hoverIcon={supportHover}
            />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Play Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={`absolute hidden md:flex items-center justify-center text-white gap-2 cursor-pointer z-10 transition-all bottom-2 h-8 duration-500 ease-in-out rounded-full bg-[#007AFF] ${
          isHovered ? "w-24" : "w-16"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={playbtn} alt="" className="w-3 transition-all duration-500" />
        <span className={`transition-opacity duration-1000 ${isHovered ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
          play
        </span>
      </motion.div>
    </div>
  );
};
