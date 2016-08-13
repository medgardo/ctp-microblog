const express = require('express');
const passport = require('../middlewares/auth');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.login);

    return router;
  },
  index(req, res) {
    res.render('login');
  },
  login(req, res) {
    passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/login',
    })(req, res);
  },
};
