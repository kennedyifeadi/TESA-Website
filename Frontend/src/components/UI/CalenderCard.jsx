import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

const today = dayjs(); // Get current date
const initialValue = today;

// Define event-based coloring
const eventDays = {
  5: 'red', // Example: 5th should be red
  10: 'green', // Example: 10th should be green
};

function ServerDay(props) {
  const { day, outsideCurrentMonth, ...other } = props;
  const dateNumber = day.date();

  // Check if day has an event color
  const eventColor = eventDays[dateNumber];

  // Check if it's today
  const isToday = day.isSame(today, 'day');

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isToday ? '📍' : undefined} // Pin icon for today
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        sx={{
          ...(eventColor && { backgroundColor: eventColor, color: 'white' }), // Event-based color
          ...(isToday && { backgroundColor: '#007BFF', color: 'white' }), // Highlight today in blue
          marginLeft: "10px",  // Adjust spacing between dates
          minWidth: "40px",
          minHeight: "40px",
          borderRadius: "8px", // Rounded corners
        }}
      />
    </Badge>
  );
}

export default function CustomDateCalendar() {
  return (
    
        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ height: '100%', width: '100%' }} >
      <DateCalendar
        defaultValue={initialValue}
        slots={{
          day: ServerDay,
        }}
        sx={{
            "& .MuiDayCalendar-weekDayLabel": {
                color: "black",
                marginLeft: "10px",
                minWidth: "40px",
                minHeight: "40px",
                },
             height: 'max-content', maxHeight:'500px', width:'400px', border:'1px solid red' }}
      />
    </LocalizationProvider>
  );
}
