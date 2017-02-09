
module.exports = function(options) {
  return function(req, res, next) {
    console.log(req.cookies.p);
    res.render('login');
    //next();
  }
}
