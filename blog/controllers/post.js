const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Post homepage...');
});

router.post('/', (req, res) => {
  models.Post.create({
    user: req.body.user,
    title: req.body.title,
    body: req.body.body,
  }).catch(function (err) {
    // Entry is not unique.
    console.log(err);
  });
  console.log(req.body);
  res.send('Copy');
});

module.exports = router;
