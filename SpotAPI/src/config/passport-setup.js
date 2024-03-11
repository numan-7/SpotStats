const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

const setupPassport = () => {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(new SpotifyStrategy({
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      profile.expires_in = expires_in;
      profile.tokenReceivedAt = new Date().getTime();
      return done(null, profile);
    }
  ));
};

module.exports = setupPassport;