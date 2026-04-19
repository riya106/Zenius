// backend/routes/internshipRoutes.js
const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

// GET all internships
router.get("/", async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    
    // Transform to ensure all fields are present
    const transformed = internships.map(intern => ({
      _id: intern._id,
      title: intern.title,
      company: intern.company,
      location: intern.location || "Remote",
      category: intern.category,
      duration: intern.duration,
      stipend: intern.stipend || "Unpaid",
      applyLink: intern.applyLink,
      lastDate: intern.lastDate,
      skills: intern.skills || []
    }));
    
    res.json(transformed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new internship
router.post("/", async (req, res) => {
  try {
    const newInternship = new Internship(req.body);
    await newInternship.save();
    res.status(201).json({ message: "Internship added", newInternship });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single internship
router.get("/:id", async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE internship
router.put("/:id", async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Internship updated", internship });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE internship
router.delete("/:id", async (req, res) => {
  try {
    await Internship.findByIdAndDelete(req.params.id);
    res.json({ message: "Internship deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;