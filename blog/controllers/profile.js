const express = require('express');
const auth = require('../middlewares/auth');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', auth.loggedIn, this.index);

    return router;
  },
  index(req, res) {
    res.render('profile');
  },
};
