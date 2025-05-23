import React from "react";
import DayCell from "./DayCell";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid = ({ days, events }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 auto-rows-fr">
        {days.map((day, index) => (
          <DayCell key={index} day={day} events={events} />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
