const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').User;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
  usernameField: 'email',
},
  (email, password, done) => {
    User.findOne({
      where: { email },
    }).then((user) => {
      if (user) {
        if (passwordsMatch(password, user.password) === false) {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else if (user == null) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  User.findById(username).then((user) => {
    if (user == null) {
      return done(null, false);
    }

    return done(null, user);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
