const Appointment = require("../models/appointmentModel");
const Availability = require("../models/availabilityModel");

const bookAppointment = async (req, res) => {
  const { professor, date, timeSlot } = req.body;
  const student = req.user._id;

  try {
    // Check availability
    const availability = await Availability.findOne({
      professor,
      date,
      timeSlots: timeSlot,
    });
    if (!availability)
      return res.status(400).json({ message: "Slot not available" });

    // Book appointment
    const appointment = await Appointment.create({
      student,
      professor,
      date,
      timeSlot,
    });

    // Update availability
    availability.timeSlots = availability.timeSlots.filter(
      (slot) => slot !== timeSlot
    );
    await availability.save();

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { bookAppointment };
