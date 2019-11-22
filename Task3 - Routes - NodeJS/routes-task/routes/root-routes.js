const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Get request in Places');
  res.send('<h1>Home Page</h1>');
});

module.exports = router;
