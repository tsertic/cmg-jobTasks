const express = require('express');
const router = express.Router();

router.get('/aboutus', (req, res) => {
  res.send('<h1>About us</h1>');
});

module.exports = router;
