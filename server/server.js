require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const contactRoutes = require("./routes/contact");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));

// 👉 Serve frontend static files
app.use(express.static(path.join(__dirname, '../dist')));

// 👉 Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
