const express = require('express');
const models = require('./blog/models/index');

const app = express();

app.use(require('./blog/controllers/'));

models.sequelize.sync().then(() => {
  app.listen(3000);
});
