const express = require("express");
const path = require("path");
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// API routes ở đây
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.use(cors({ origin: 'https://<frontend-pages>.pages.dev' }));

// Serve frontend build
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

