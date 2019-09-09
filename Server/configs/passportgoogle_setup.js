const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('../../appkeys');

passport.use(new GoogleStrategy({  
    clientID: Keys.google.ClientID,
    clientSecret: Keys.google.ClientSecret,
    callbackURL:'/api/auth/user',
    passReqToCallback   : true
}, (accessToken,refreshToken,profile,cb) => {
 return cb(null,'hi')
}));