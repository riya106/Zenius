// backend/models/Hackathon.js
const mongoose = require("mongoose");

const HackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organizer: { type: String, required: true },
  date: { type: String, required: true },
  desc: { type: String, required: true },
  mode: { type: String, default: "Online" }, // ← ADD THIS
  applyLink: { type: String }, // ← ADD THIS
  location: { type: String }, // ← ADD THIS
  prize: { type: String }, // ← ADD THIS (optional)
  teamSize: { type: String } // ← ADD THIS (optional)
});

module.exports = mongoose.model("Hackathon", HackathonSchema);