const express = require('express');
const exphbs  = require('express-handlebars');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const models = require('./blog/models/index');
const passport = require('./blog/middlewares/auth');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: false })));
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({
  layoutsDir: "blog/views/layouts",
  defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/blog/views/');

app.use(require('./blog/controllers/'));

models.sequelize.sync().then(() => {
  app.listen(3000);
});
