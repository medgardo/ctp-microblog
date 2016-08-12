const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();

router.post('/', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
