import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const today = dayjs(); // Get current date
const eventDays = {
  5: 'red', 
  10: 'green', 
};

function ServerDay(props) {
  const { day, outsideCurrentMonth, ...other } = props;
  const dateNumber = day.date();
  const eventColor = eventDays[dateNumber];
  const isToday = day.isSame(today, 'day');

  return (
    <Badge key={day.toString()} overlap="circular" badgeContent={isToday ? '📍' : undefined}>
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        sx={{
          ...(eventColor && { backgroundColor: eventColor, color: 'white' }),
          ...(isToday && { backgroundColor: '#007BFF', color: 'white' }),
          marginLeft: { xs: "5px", sm: "8px", md: "20px" },
          minWidth: { xs: "28px", sm: "30px", md: "40px" },
          minHeight: { xs: "28px", sm: "30px", md: "40px" },
          fontSize: { xs: "10px", sm: "12px", md: "16px" },
          borderRadius: "50%",
        }}
      />
    </Badge>
  );
}

export default function CustomDateCalendar() {
  const [selectedDate, setSelectedDate] = React.useState(today); // ✅ Use state to control the calendar

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate} // ✅ Controlled value
        onChange={(newDate) => setSelectedDate(newDate)} // ✅ Update state when date changes
        slots={{ day: ServerDay }}
        sx={{
          "& .MuiDayCalendar-weekDayLabel": {
            color: "black",
            marginLeft: { xs: "5px", sm: "8px", md: "20px" },
            minWidth: { xs: "25px", sm: "30px", md: "40px" },
            minHeight: { xs: "25px", sm: "30px", md: "40px" },
            fontSize: { xs: "10px", sm: "12px", md: "16px" },
          },
          width: "100%",
          maxWidth: { xs: "100%", sm: "90%", md: "500px" },
          height: "max-content",
          maxHeight: "500px",
          border: '1px solid red',
          padding: { xs: "8px", sm: "10px", md: "20px" },
        }}
      />
    </LocalizationProvider>
  );
}
