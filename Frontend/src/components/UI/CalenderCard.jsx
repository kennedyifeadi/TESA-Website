import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CustomDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

  const eventDays = {
    22: { color: '#8b5cf6', title: 'Freshers Cup' },
    24: { color: '#FA8F21', title: 'Freshers Orientation' }
  };

  const today = new Date();
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isToday = (day) => {
    return today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear;
  };

  const renderCalendarDays = () => {
    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 md:h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const event = eventDays[day];
      const isTodayDate = isToday(day);

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`h-10 md:h-10 w-10 md:w-12 flex items-center justify-center text-sm md:text-base font-medium cursor-pointer relative transition-all duration-200 rounded-xl mx-auto
            ${isTodayDate ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : ''}
            ${event && !isTodayDate ? 'text-white' : ''}
            ${!event && !isTodayDate ? 'text-gray-700 hover:bg-gray-50' : ''}
          `}
          style={{
            backgroundColor: event && !isTodayDate ? event.color : undefined
          }}
          onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
          onMouseEnter={() => event && setHoveredDate({ day, event })}
          onMouseLeave={() => setHoveredDate(null)}
        >
          {day}
          {event && (
            <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-white"
              style={{ backgroundColor: event.color }} />
          )}
        </motion.div>
      );
    }

    return days;
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/40 p-6 md:p-6 max-w-lg mx-auto"
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#007AFF] to-[#FA8F21] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 mb-4">
          {weekDays.map(day => (
            <div key={day} className="h-8 flex items-center justify-center text-gray-600 font-semibold text-sm">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5 mb-4">
          {renderCalendarDays()}
        </div>

        {hoveredDate && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute z-20 bg-gray-800 text-white px-4 py-3 rounded-xl text-sm shadow-2xl border border-gray-600 top-6 right-6"
          >
            <div className="font-semibold">{hoveredDate.event.title}</div>
            <div className="text-xs text-gray-300">{monthNames[currentMonth]} {hoveredDate.day}</div>
          </motion.div>
        )}

        <div className="flex flex-wrap justify-center gap-2">
          {Object.entries(eventDays).map(([day, event]) => (
            <motion.div
              key={day}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xs bg-white/60 backdrop-blur rounded-full px-3 py-2 border border-white/40 shadow-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: event.color }} />
              <span className="text-gray-700 font-medium">{day}th</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
