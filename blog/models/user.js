const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 5;

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  User.beforeCreate(function(user, options) {
    return new sequelize.Promise(function(resolve, reject) {
      bcrypt.hash(user.password, saltRounds, function(err, hashedPassword) {
        resolve(hashedPassword);
      });
    }).then(function (hashedPw) {
      user.password = hashedPw;
    });
  });

  return User;
};
