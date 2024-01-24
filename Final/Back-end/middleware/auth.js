
var User = require("../models/student");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var config = require("../config/config");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;

var params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    User.findById(payload.id, function(then, student) {
      if (then) {
        return done(new Error("UserNotFound"), null);
      } else if (payload.expire <= Date.now()) {
        return done(new Error("TokenExpired"), null);
      } else{
        return done(null, student);
      }
    });
  });

  passport.use(strategy);

  return { initialize: function() { return passport.initialize() }};
};




