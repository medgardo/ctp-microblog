const helpers = {};

helpers.register = () => {
  return (req, res, next) => {
    res.locals.cur_user = req.user;
    next();
  }
};

module.exports = helpers;
