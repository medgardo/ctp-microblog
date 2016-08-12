const express = require('express');
const models = require('../models');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth.loggedIn, (req, res) => {
  res.render('profile');
});

module.exports = router;
