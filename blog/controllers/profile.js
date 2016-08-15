const auth = require('../middlewares/auth');
const express = require('express');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', auth.redirectIfNotLoggedIn('/login'), this.index);

    return router;
  },
  index(req, res) {
    res.render('profile', {
      user: req.user,
    });
  },
};
