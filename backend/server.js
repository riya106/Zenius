// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",      // Local Vite dev server
      "http://localhost:3000",      // Local React dev server
      "https://zenius2.vercel.app", // Your deployed frontend
      "https://zenius2.vercel.app", // Alternative Vercel URL
      "https://zenius-backend.onrender.com" // Self URL
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 200
  })
);

app.use(express.json());

/* =======================
   DATABASE CONNECTION
======================= */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* =======================
   TEST ROUTE
======================= */
app.get("/", (req, res) => {
  res.json({ 
    message: "🚀 Zenius Backend Running",
    status: "active",
    timestamp: new Date().toISOString()
  });
});

/* =======================
   ROUTES
======================= */
app.use("/api/internships", require("./routes/internshipRoutes"));
app.use("/api/summits", require("./routes/summitRoutes"));
app.use("/api/hackathons", require("./routes/hackathonRoutes"));
app.use("/api/dsa", require("./routes/dsaRoutes"));

/* =======================
   ERROR HANDLING MIDDLEWARE
======================= */
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🌐 CORS enabled for: https://zenius2.vercel.app`);
});