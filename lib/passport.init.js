const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');


module.exports = () => {  

  // Allowing passport to serialize and deserialize users into sessions
  passport.serializeUser((user, cb) => cb(null, user))
  passport.deserializeUser((obj, cb) => cb(null, obj))
  
  // The function that is called when an OAuth provider sends back user 
  // information.  Normally, you would save the user to the database here
  // in a callback that was customized for each provider.
  const callback = async (accessToken, refreshToken, profile, cb) => {
    try {
      console.log(profile, ' this is profile');
      console.log(profile.id, ' this is profile.id');
      const foundUser = await User.findOne({googleId: `${profile.id}`});
      if (foundUser) {
        console.log(foundUser, ' this is foundUser');
        // res.json({
        //   status: 200,
        //   data: foundUser
        // });
        //comes with callback(cb) that gets called when its done
        //null = error and second arguement is second is what we want to send 
        cb(null, foundUser)
      } else {
        const createdUser = await User.create({
          username: profile.name.givenName,
          googleId: profile.id,
          password: profile.id,
          email: profile.emails[0].value
        });

        await createdUser.save();

        console.log(createdUser, ' this is created User');
        //comes with callback(cb) that gets called when its done
        //null = error and second arguement is second is what we want to send 
        cb(null, createdUser)

        // res.json({
        //   status: 200,
        //   data: createdUser
        // });
      }

    } catch (err) {
      console.log(err);
    }
    return cb(null, profile)
  }

  // Adding each OAuth provider's strategy to passport
  // passport.use(new TwitterStrategy(TWITTER_CONFIG, callback))
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.SOCKET_GOOGLE_CALLBACK
  }, callback))
  // passport.use(new FacebookStrategy(FACEBOOK_CONFIG, callback))
  // passport.use(new GithubStrategy(GITHUB_CONFIG, callback))
}