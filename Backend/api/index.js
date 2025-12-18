// api/index.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Zenius is working!");
});

// export for Vercel
module.exports = app;
