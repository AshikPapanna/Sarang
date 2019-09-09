const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user_m = require('./../models/user_m.js');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user_m.findById(id).then((user) => {
        done(null, user);
    })
})

passport.use(new LocalStrategy({ passReqToCallback: true },
    (req, username, password, done) => {
        console.log("sent");
        user_m.findOne({ username: username }, (err, user) => {
            if (err) { console.log(err); return done(err); }
            if (!user) { console.log('no user');  return done(null, false, { message: "Invalid user" }); }
            if (!user.comparepassword(password)) { console.log('nop'); return done(null, false, { message: "Invalid password" }); }
            //console.log(user);
            return done(null, user);
        })
    }
));