var userrouter = require('express').Router();
var usermw = require('./../middlewares/user_mw.js');
const passport = require('passport');

userrouter.get('/user', function () {

})

/*userrouter.post('/user', function (req, res) {
    console.log(req.body);   
    res.send( usermw.saveUserForSignup(req.body));

});*/

userrouter.post('/login', passport.authenticate('local', { successRedirect: '/api/dashboard', failureRedirect: '/api/auth/login', failureFlash: true }));

userrouter.get('/login', (req, res) => {
    res.send("please login");
});

userrouter.post('/signup', usermw.saveUserForSignup);


userrouter.get('/logout', (req, res) => {
    req.logout();
    res.send('logged out');
})


userrouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }),  (req, res)=> {
    console.log(req.body);
    var respo = usermw.save(req.body)
    res.send(respo);

});


//userrouter.
module.exports = userrouter;
