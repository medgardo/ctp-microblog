const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:username', this.show);

    return router;
  },
  index(req, res) {
    res.send('All Users...');
  },
  show(req, res) {
    res.send('Specific User info...');
  },
};
