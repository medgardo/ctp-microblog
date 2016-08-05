const express = require('express');
const bodyParser = require('body-parser');
const models = require('./blog/models/index');

const app = express();

app.use(bodyParser.json());
app.use(require('./blog/controllers/'));

models.sequelize.sync().then(() => {
  app.listen(3000);
});
