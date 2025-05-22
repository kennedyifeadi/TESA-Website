import React from 'react';
// import { DynamicBackground } from "./DynamicBackground";
import { Typewriter } from 'react-simple-typewriter';
import Background from "../assets/images/HeroSectionBackground.jpg";
import Cuate from '../assets/images/cuate.png';
import { motion } from 'framer-motion';

// Dynamic Background Component
const DynamicBackground = ({ imageUrl, className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <img 
        src={imageUrl} 
        alt="Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
    </div>
  );
};

// Animated Stats Component
const StatCard = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="text-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: delay + 0.2, type: "spring", bounce: 0.4 }}
      className="text-xl md:text-3xl font-bold text-white mb-1"
      style={{ fontFamily: '"Aldrich", sans-serif' }}
    >
      {number}
    </motion.div>
    <div className="text-xs md:text-sm text-gray-200" style={{ fontFamily: '"Poppins", sans-serif' }}>
      {label}
    </div>
  </motion.div>
);

// Floating shapes for visual interest
const FloatingShape = ({ delay, duration, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop"
    }}
    className={`absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 ${className}`}
  />
);

export const SponsorshipHeroSection = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden py-12 md:py-0'>
      {/* Main Background */}
      <DynamicBackground imageUrl={Background} />
      
      {/* Floating Shapes */}
      <FloatingShape delay={0} duration={8} className="w-20 h-20 top-20 left-10" />
      <FloatingShape delay={2} duration={10} className="w-16 h-16 top-40 right-20" />
      <FloatingShape delay={4} duration={12} className="w-24 h-24 bottom-32 left-1/4" />
      <FloatingShape delay={6} duration={9} className="w-12 h-12 bottom-20 right-1/3" />
      
      {/* Main Content Container */}
      <div className='w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center z-10'>
        
        {/* Left Content Section */}
        <div className='space-y-6 md:space-y-2 text-left order-2 lg:order-1'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-2 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-white text-[10px] font-medium" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Partnership Opportunities Open
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 
  className='text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'
  style={{ fontFamily: '"Aldrich", sans-serif' }}
>
  <span className="block">
    <span className="bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent">
      <Typewriter
        words={['Partner!', 'Sponsor!', 'Collaborate!']}
        loop={0} // 0 means infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  </span>
  <span className="block">WITH TESA</span>
</h1>

            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className='text-base sm:text-lg md:text-md text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed'
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Join us in shaping the future of technology and innovation. 
              Together, we create impact that resonates across industries and communities.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-[#007AFF] to-[#007AFF] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Become a Sponsor
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              View Packages
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-white/20"
          >
            <StatCard number="100+" label="Partners Worldwide" delay={1.8} />
            <StatCard number="50K+" label="People Reached" delay={2.0} />
            <StatCard number="50+" label="Events Hosted" delay={2.2} />
          </motion.div>
        </div>

        {/* Right Visual Section */}
        <div className='relative justify-center items-center order-1 lg:order-2 hidden md:flex'>
          {/* Decorative Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
          
          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.8,
              type: "spring",
              bounce: 0.2
            }}
            className="relative z-10"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl scale-110 animate-pulse"></div>
            
            {/* Image */}
            <img 
              src={Cuate} 
              alt="Partnership Illustration" 
              className='w-52 h-52 sm:w-52 sm:h-52 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] object-contain relative z-10 drop-shadow-2xl' 
            />
            
            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20"
            >
              <div className="absolute -top-4 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -right-4 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 left-1/3 w-4 h-4 bg-pink-500 rounded-full shadow-lg"></div>
              <div className="absolute top-1/4 -left-4 w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute md:bottom-8 bottom-3 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="md:w-6 w-4 h-6 md:h-10 border-2 border-white/50 rounded-full mx-auto mb-2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 md:h-3 h-1 bg-white rounded-full md:mt-2"
          />
        </motion.div>
        <span className="md:text-sm text-[10px]" style={{ fontFamily: '"Poppins", sans-serif' }}>Scroll to explore</span>
      </motion.div>
    </div>
  );
};

