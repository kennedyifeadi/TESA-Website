import React from 'react';
import { motion } from 'framer-motion';
import Background from "../assets/images/HeroSectionBackground.jpg";
import { CustomDateCalendar } from './UI/CalenderCard';


const DynamicBackground = ({ imageUrl }) => (
  <div className="absolute inset-0">
    <div
      className="w-full h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop'})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-indigo-100/50"></div>
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-300 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-indigo-300 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-purple-300 rounded-full"></div>
      </div>
    </div>
  </div>
);

export const Calendar = () => {
  return (
    <div className="w-full min-h-[120dvh] h-max flex relative items-center pb-4">
      <DynamicBackground imageUrl={Background} />

      <div className="w-full px-4 md:px-12 lg:px-16 h-full flex z-10 md:flex-row flex-col items-center justify-between md:pt-0 pt-20">
        {/* Left Text Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-[45%] space-y-8 mb-8 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 shadow"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Faculty of Technology</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray-900  leading-tight"
            >
              Academic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Updates</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-md md:text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Stay informed about important academic events, deadlines, workshops, and faculty announcements throughout the semester.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">📚</div>
              <span className="font-medium">Academic Sessions & Workshops</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">⏰</div>
              <span className="font-medium">Important Deadlines & Exams</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">🎓</div>
              <span className="font-medium">Faculty Events & Conferences</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Calendar Side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full md:w-[50%] flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -top-6 -right-6 w-12 h-12 border-2 border-blue-300/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-indigo-300/30 rounded-lg rotate-45"
            />
            <CustomDateCalendar/>
          </div>
        </motion.div>
      </div>

      {/* Floating dots */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-6 h-6 bg-blue-400/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute bottom-32 right-20 w-4 h-4 bg-indigo-400/20 rounded-full blur-sm"
      />
    </div>
  );
};
