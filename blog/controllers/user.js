const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('User homepage...');
});

router.post('/', (req, res) => {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  res.send('Copy');
});

module.exports = router;
