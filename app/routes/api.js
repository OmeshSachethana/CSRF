const express = require('express');
const csrfProtection = require('../middlewares/csrfMiddleware');

const router = express.Router();

// Route to provide CSRF token
router.get('/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Protected route example
router.post('/submit', csrfProtection, (req, res) => {
  const { exampleField } = req.body;
  res.json({ message: 'Request processed successfully!', data: exampleField });
});

module.exports = router;
