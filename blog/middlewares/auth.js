const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').User;

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  function(email, password, done) {
    User.findOne({
      where: { email: email }
    }).then(function(user) {
      if(user) {
        if(user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else if (user == null) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(userID, done) {
  User.findById(userID).then(function(user) {
    if (user == null) {
      return done(null, false);
    }

    return done(null, user);
  });
});

module.exports = passport;
