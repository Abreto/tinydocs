
module.exports = function(options) {
  return function(req, res, next) {
    console.log(req.cookies.p);
    if( req.cookies.p === options.passcode )
      next();
    else
      res.render('login');
  }
}
