const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  timeSlots: [{ type: String, required: true }],
});

module.exports = mongoose.model("Availability", availabilitySchema);
