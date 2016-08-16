const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Post = sequelize.define('post', {
    email: {
      type: Sequelize.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
    title: {
      type: Sequelize.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    body: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Post;
};
