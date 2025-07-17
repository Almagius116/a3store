const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleLogin } = require("../services/userService");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/users/google/callback",
    },

    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const result = await googleLogin(profile);
        done(null, result);
      } catch (err) {
        done(err);
      }
    }
  )
);

module.exports = passport;
