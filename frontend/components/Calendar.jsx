import React from "react";
import App from "../src/App.css"; // Import if needed for additional styles

const Calendar = ({ onEventClick }) => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const events = [
    { id: 1, date: 19, title: "Event 1", allDay: true },
    { id: 2, date: 22, title: "Event 2", allDay: true },
  ];

  const handleDayClick = (day) => {
    const event = events.find((event) => event.date === day);
    if (event) {
      onEventClick(event);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">September 2024</h2>
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`border p-4 text-center cursor-pointer ${
              events.some((event) => event.date === day)
                ? "bg-blue-100 text-blue-700"
                : "bg-white"
            } hover:bg-gray-200 transition-all`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
