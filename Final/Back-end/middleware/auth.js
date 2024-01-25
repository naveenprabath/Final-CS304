const User = require("../models/student");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const config = require("../config/config");

const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

module.exports = function () {
  const strategy = new JWTStrategy(opts, async (payload, done) => {
    try {
      const user = await User.findById(payload.id);

      if (!user) {
        return done(new Error("UserNotFound"), null);
      }

      if (payload.expire <= Date.now()) {
        return done(new Error("TokenExpired"), null);
      }

      return done(null, user);
    } catch (error) {
      console.error(error);
      return done(error, null);
    }
  });

  passport.use(strategy);

  return { initialize: () => passport.initialize() };
};
