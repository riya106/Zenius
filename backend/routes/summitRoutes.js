// backend/routes/summitRoutes.js
const express = require("express");
const router = express.Router();  // ← THIS LINE WAS MISSING
const Summit = require("../models/Summit");

// GET all summits
router.get("/", async (req, res) => {
  try {
    const summits = await Summit.find().sort({ createdAt: -1 });
    
    // Transform to match frontend expectations
    const transformedSummits = summits.map(summit => ({
      _id: summit._id,
      title: summit.title,
      description: summit.description,
      shortDescription: summit.description?.substring(0, 120),
      location: summit.location,
      date: summit.date,
      category: summit.category || "Conference",
      applyLink: summit.applyLink,
      organizer: summit.organizer,
      image: summit.image
    }));
    
    res.json(transformedSummits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch summits" });
  }
});

// GET single summit
router.get("/:id", async (req, res) => {
  try {
    const summit = await Summit.findById(req.params.id);
    if (!summit) return res.status(404).json({ error: "Summit not found" });
    
    const transformed = {
      _id: summit._id,
      title: summit.title,
      description: summit.description,
      shortDescription: summit.description?.substring(0, 120),
      location: summit.location,
      date: summit.date,
      category: summit.category || "Conference",
      applyLink: summit.applyLink,
      organizer: summit.organizer
    };
    
    res.json(transformed);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch summit details" });
  }
});

// POST new summit
router.post("/", async (req, res) => {
  try {
    const summit = new Summit(req.body);
    await summit.save();
    res.status(201).json(summit);
  } catch (err) {
    res.status(500).json({ error: "Failed to create summit" });
  }
});

module.exports = router;