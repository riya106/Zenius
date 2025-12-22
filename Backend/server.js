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
      "http://localhost:5173",
      "https://zenius.vercel.app"
    ],
    credentials: true
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
  res.send("🚀 Zenius Backend Running...");
});

/* =======================
   ROUTES
======================= */
app.use("/api/internships", require("./routes/internshipRoutes"));
app.use("/api/summits", require("./routes/summitRoutes"));
app.use("/api/hackathons", require("./routes/hackathonRoutes"));
app.use("/api/dsa", require("./routes/dsaRoutes"));

/* =======================
   START SERVER (RENDER + LOCAL)
======================= */
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

