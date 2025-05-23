import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import { generateCalendarDays } from "../utils/dateUtils";
import eventData from "../data/events.json";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendarDays, setCalendarDays] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventData);
  }, []);

  useEffect(() => {
    const year = currentDate.year();
    const month = currentDate.month();
    const days = generateCalendarDays(year, month);
    setCalendarDays(days);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <div className="flex flex-col h-screen">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <div className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50">
        <CalendarGrid days={calendarDays} events={events} />
      </div>
    </div>
  );
};

export default Calendar;
