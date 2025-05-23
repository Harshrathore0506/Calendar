import React from "react";
import { formatEventTime } from "../utils/dateUtils";

const EventItem = ({ event, isCondensed = false }) => {
  if (isCondensed) {
    return (
      <div
        className="h-2 rounded-full my-1 mx-1"
        style={{ backgroundColor: event.color }}
        title={`${event.title} - ${formatEventTime(event.time)}`}
      />
    );
  }

  return (
    <div
      className="px-2 py-1 rounded-md text-xs mb-1 truncate cursor-pointer hover:opacity-90 transition-opacity"
      style={{ backgroundColor: event.color, color: "white" }}>
      <span className="font-medium">{formatEventTime(event.time)}</span>{" "}
      {event.title}
    </div>
  );
};

export default EventItem;
