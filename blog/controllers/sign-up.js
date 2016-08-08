const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
});

router.post('/', (req, res) => {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
});

module.exports = router;
