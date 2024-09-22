const Event = require('../models/eventModel');

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const { title, date, time, description } = req.body;
    const newEvent = await Event.create({ title, date, time, description });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, time, description } = req.body;
    const event = await Event.findByPk(id);
    
    if (event) {
      event.title = title;
      event.date = date;
      event.time = time;
      event.description = description;
      await event.save();
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete event
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    
    if (event) {
      await event.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
