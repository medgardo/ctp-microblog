const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const models = require('./blog/models/index');
const passport = require('./blog/middlewares/authentication');

const app = express();
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./blog/public'));

app.engine('handlebars', exphbs({
  layoutsDir: 'blog/views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/blog/views/`);

app.use(require('./blog/controllers/'));

models.sequelize.sync().then(() => {
  app.listen(3000);
});
