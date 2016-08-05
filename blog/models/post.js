const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Post = sequelize.define('post', {
    user: {
      type: Sequelize.INTEGER,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
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
    }
  });

  return Post;
};
