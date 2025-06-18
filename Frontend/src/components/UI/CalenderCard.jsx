import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Import or define EventsObject here
const EventsObject = [
  {
    id: 1,
    category: "News",
    Title: "School fees and Course Registration",
    Content: "Deadline for school fees payment ",
    day: "21st June",
    year: "2025"
  },
  {
    id: 2,
    category: "Activities",
    Title: "TCSF Meeting",
    Content: "Technology Christian Students Family Meeting holds every Friday at 5:00 PM.",
    day: "Friday",
    year: "2025"
  },
  {
    id: 3,
    category: "Activities",
    Title: "TLDS Meeting",
    Content: "Technology literary and debate society meeting holds every Friday at 12:00 PM.",
    day: "Friday",
    year: "2025"
  },
  {
    id: 4,
    category: "News",
    Title: "Exam Schedule",
    Content: "GES Exams",
    day: "7th July",
    year: "2025"
  },
  {
    id: 5,
    category: "Activities",
    Title: "TLDS Bilaterals",
    Content: "Tech Bilaterals....Anticipate!!!",
    day: "5th July",
    year: "2025"
  },
  {
    id: 6,
    category: "Activities",
    Title: "CTRL LABS",
    Content: "CTRL LABS is a Bi-weekly event where students can come together to learn and collaborate on various projects.",
    day: "bi-weekly-saturday",
    year: "2025"
  },
  {
    id: 7,
    category: "News",
    Title: "Exam Schedule",
    Content: "Tech Examinations",
    day: "14th July",
    year: "2025"
  }
];

export const CustomDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

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

  // Function to parse date strings and determine if they match current month/year
  const parseEventDate = (dayString, yearString) => {
    const currentMonthName = monthNames[currentMonth].toLowerCase();
    const currentYearStr = currentYear.toString();
    
    // Handle specific dates like "21st June"
    if (dayString.includes(currentMonthName)) {
      const dayMatch = dayString.match(/(\d+)/);
      if (dayMatch && yearString === currentYearStr) {
        return parseInt(dayMatch[1]);
      }
    }
    
    // Handle "Today" - assume it's current date
    if (dayString.toLowerCase() === 'today') {
      if (today.getMonth() === currentMonth && today.getFullYear() === currentYear) {
        return today.getDate();
      }
    }
    
    return null;
  };

  // Function to get all Fridays in the current month
  const getFridaysInMonth = () => {
    const fridays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      if (date.getDay() === 5) { // Friday is day 5
        fridays.push(day);
      }
    }
    return fridays;
  };

  // Function to get bi-weekly Saturdays (1st and 3rd Saturday of the month)
  const getBiWeeklySaturdays = () => {
    const saturdays = [];
    let saturdayCount = 0;
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      if (date.getDay() === 6) { // Saturday is day 6
        saturdayCount++;
        // Include 1st and 3rd Saturday of the month
        if (saturdayCount === 1 || saturdayCount === 3) {
          saturdays.push(day);
        }
      }
    }
    return saturdays;
  };

  // Generate event days for current month
  const eventDays = useMemo(() => {
    const events = {};
    const fridays = getFridaysInMonth();
    const biWeeklySaturdays = getBiWeeklySaturdays();

    EventsObject.forEach(event => {
      const eventColor = event.category === "News" ? '#FA8F21' : '#8b5cf6';
      
      // Handle specific dates
      const specificDay = parseEventDate(event.day, event.year);
      if (specificDay) {
        if (!events[specificDay]) {
          events[specificDay] = [];
        }
        events[specificDay].push({
          color: eventColor,
          title: event.Title,
          content: event.Content,
          category: event.category
        });
      }
      
      // Handle recurring events
      if (event.day.toLowerCase() === 'friday') {
        fridays.forEach(friday => {
          if (!events[friday]) {
            events[friday] = [];
          }
          events[friday].push({
            color: eventColor,
            title: event.Title,
            content: event.Content,
            category: event.category
          });
        });
      }
      
      // Handle bi-weekly Saturday events (CTRL LABS)
      if (event.day.toLowerCase() === 'bi-weekly-saturday') {
        biWeeklySaturdays.forEach(saturday => {
          if (!events[saturday]) {
            events[saturday] = [];
          }
          events[saturday].push({
            color: eventColor,
            title: event.Title,
            content: event.Content,
            category: event.category
          });
        });
      }
    });

    return events;
  }, [currentMonth, currentYear, daysInMonth]);

  const isToday = (day) => {
    return today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(currentMonth + direction);
    setSelectedDate(newDate);
  };

  const renderCalendarDays = () => {
    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 md:h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = eventDays[day] || [];
      const primaryEvent = dayEvents[0]; // Show first event as primary
      const isTodayDate = isToday(day);

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`h-10 md:h-10 w-10 md:w-12 flex items-center justify-center text-sm md:text-base font-medium cursor-pointer relative transition-all duration-200 rounded-xl mx-auto
            ${isTodayDate ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : ''}
            ${primaryEvent && !isTodayDate ? 'text-white' : ''}
            ${!primaryEvent && !isTodayDate ? 'text-gray-700 hover:bg-gray-50' : ''}
          `}
          style={{
            backgroundColor: primaryEvent && !isTodayDate ? primaryEvent.color : undefined
          }}
          onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
          onMouseEnter={() => dayEvents.length > 0 && setHoveredDate({ day, events: dayEvents })}
          onMouseLeave={() => setHoveredDate(null)}
        >
          {day}
          {dayEvents.length > 0 && (
            <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-white flex items-center justify-center">
              {dayEvents.length > 1 && (
                <span className="text-xs font-bold text-white">{dayEvents.length}</span>
              )}
              <div className="absolute inset-0 rounded-full" style={{ backgroundColor: primaryEvent.color }} />
            </div>
          )}
        </motion.div>
      );
    }

    return days;
  };

  const getAllUniqueEvents = () => {
    const uniqueEvents = new Map();
    Object.entries(eventDays).forEach(([day, events]) => {
      events.forEach(event => {
        const key = `${event.title}-${event.category}`;
        if (!uniqueEvents.has(key)) {
          uniqueEvents.set(key, { ...event, day });
        }
      });
    });
    return Array.from(uniqueEvents.values());
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
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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
            className="absolute z-20 bg-gray-800 text-white px-4 py-3 rounded-xl text-sm shadow-2xl border border-gray-600 top-6 right-6 max-w-xs"
          >
            {hoveredDate.events.map((event, index) => (
              <div key={index} className={index > 0 ? 'mt-2 pt-2 border-t border-gray-600' : ''}>
                <div className="font-semibold">{event.title}</div>
                <div className="text-xs text-gray-300">{monthNames[currentMonth]} {hoveredDate.day}</div>
                <div className="text-xs text-gray-400 mt-1">{event.content}</div>
              </div>
            ))}
          </motion.div>
        )}

        <div className="flex flex-wrap justify-center gap-2">
          {getAllUniqueEvents().map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xs bg-white/60 backdrop-blur rounded-full px-3 py-2 border border-white/40 shadow-sm"
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: event.color }} />
              <span className="text-gray-700 font-medium">{event.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};