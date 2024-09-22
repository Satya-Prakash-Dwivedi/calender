import React, { useState } from "react";
import Calendar from "../components/Calendar";
import EventDetailsModal from "../components/EventDetailModal";

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto p-4">
      <Calendar onEventClick={handleEventClick} />
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
