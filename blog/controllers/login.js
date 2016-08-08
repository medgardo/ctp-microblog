const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', 
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })
);

module.exports = router;
