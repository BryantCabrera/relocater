const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');


module.exports = () => {  

  // Allows passport to serialize and deserialize users into sessions
  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((obj, cb) => cb(null, obj));
  
  // The function that is called when an OAuth provider sends back user 
  // information.  Normally, you would save the user to the database here
  // in a callback that was customized for each provider.
  const callback = async (accessToken, refreshToken, profile, cb) => {
    try {
      const foundUser = await User.findOne({googleId: `${profile.id}`});
      if (foundUser) {
        //comes with callback(cb) that gets called when its done
        //null = error and second arguement is second is what we want to send 
        cb(null, foundUser)
      } else {
        const createdUser = await User.create({
          username: profile.name.givenName,
          googleId: profile.id,
          password: profile.id,
          email: profile.emails[0].value,
          isNew: true
        });

        // createdUser.isNew = true;
        await createdUser.save();

        //comes with callback(cb) that gets called when its done
        //null = error and second arguement is second is what we want to send 
        cb(null, createdUser)
      }

    } catch (err) {
      console.log(err);
    }
    return cb(null, profile)
  }

  // Adds each OAuth provider's strategy to passport
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.SOCKET_GOOGLE_CALLBACK
  }, callback))
}