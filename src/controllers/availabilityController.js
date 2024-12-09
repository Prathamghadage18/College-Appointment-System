const Availability = require("../models/availabilityModel");

const addAvailability = async (req, res) => {
  const { date, timeSlots } = req.body;
  const professor = req.user._id;

  try {
    const availability = await Availability.create({
      professor,
      date,
      timeSlots,
    });
    res.status(201).json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAvailability = async (req, res) => {
  try {
    const availability = await Availability.find({ professor: req.user._id });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addAvailability, getAvailability };
