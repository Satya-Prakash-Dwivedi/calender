import React, { useState } from "react";

const EventDetailsModal = ({ event, onClose }) => {
  const [title, setTitle] = useState(event.title);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    console.log("Event saved:", { title, location, description });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">New Event</h3>
        <form>
          <label className="block mb-2 text-sm font-medium">
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full p-2 border rounded-lg mt-1 mb-4"
            />
          </label>
          <label className="block mb-2 text-sm font-medium">
            Location
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="block w-full p-2 border rounded-lg mt-1 mb-4"
            />
          </label>
          <label className="block mb-2 text-sm font-medium">
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full p-2 border rounded-lg mt-1 mb-4"
            />
          </label>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventDetailsModal;
