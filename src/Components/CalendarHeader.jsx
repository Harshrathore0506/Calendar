import React from "react";
import Sleft from "../assets/left.png";
import Sright from "../assets/right.png";

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Calendar</h1>
      </div>

      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-bold text-gray-800">
          {currentDate.format("MMMM YYYY")}
        </h2>

        <div className="flex space-x-2">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous month">
            <img className="w-8" src={Sleft} alt="" />
          </button>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next month">
            <img className="w-8" src={Sright} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default CalendarHeader;
