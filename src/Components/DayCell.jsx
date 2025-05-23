/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import dayjs from "dayjs";
import EventItem from "./EventItem";


const DayCell = ({ day, events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const dayEvents = events.filter(
    (event) =>
      dayjs(event.date).format("YYYY-MM-DD") === day.date.format("YYYY-MM-DD")
  );

  const MAX_VISIBLE_EVENTS = 3;
  const visibleEvents = dayEvents.slice(0, MAX_VISIBLE_EVENTS);
  const hiddenEventsCount = dayEvents.length - MAX_VISIBLE_EVENTS;

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };
  return (
    <div
      className={`border border-gray-200 min-h-[100px] p-1 ${
        day.isCurrentMonth ? "bg-white" : "bg-gray-50"
      } ${day.isToday ? "ring-2 ring-blue-500 ring-inset" : ""}`}>
      <div className="flex items-start justify-between">
        <span
          className={`text-sm font-medium ${
            day.isCurrentMonth
              ? day.isToday
                ? "text-blue-600"
                : "text-gray-900"
              : "text-gray-400"
          }`}>
          {day.date.format("D")}
        </span>
      </div>

      <div className="mt-1">
        {visibleEvents.map((event) => (
          <div key={event.id} onClick={() => handleEventClick(event)}>
            <EventItem event={event} />
          </div>
        ))}

        {hiddenEventsCount > 0 && (
          <div className="mt-1 text-xs font-medium text-gray-500">
            +{hiddenEventsCount} more
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCell;
