// backend/routes/hackathonRoutes.js
const express = require("express");
const router = express.Router();
const Hackathon = require("../models/Hackathon");

// GET all hackathons
router.get("/", async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    
    // Transform to match frontend expectations
    const transformed = hackathons.map(hack => ({
      _id: hack._id,
      name: hack.name,
      organizer: hack.organizer,
      date: hack.date,
      description: hack.desc, // Use desc as description
      mode: hack.mode || "Online",
      applyLink: hack.applyLink || "#",
      location: hack.location || "Online",
      prize: hack.prize,
      teamSize: hack.teamSize
    }));
    
    res.json(transformed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// POST new hackathon
router.post("/", async (req, res) => {
  try {
    const newHackathon = new Hackathon(req.body);
    await newHackathon.save();
    res.status(201).json({ message: "Hackathon Added", newHackathon });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST bulk hackathons
router.post("/bulk", async (req, res) => {
  try {
    const hackathons = await Hackathon.insertMany(req.body);
    res.status(201).json({
      message: "Bulk Hackathons Added Successfully",
      count: hackathons.length,
      hackathons
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;