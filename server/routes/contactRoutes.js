// server/routes/contactRoutes.js
const express = require('express');
const router = express.Router();

// Define your routes here
router.post('/', (req, res) => {
  // Handle the contact form submission
  res.send('Contact form submitted');
});

module.exports = router;
