

const user_m = require('./../models/user_m.js');
const helper = require('../helpers/mongoerrorhandler');


module.exports = new Object({
    createUser: function () {
        return user_m;
    },
    getUserById: function (id) {

    },
    saveUserForSignup: function (req, res) {
        userm = req.body;
        console.log(userm.username);
        user = new user_m({
            username: userm.username,
            password: userm.password,
            emailId :userm.emailId
        });
        console.log(user);       
        user.save(function (err, u) {
            if (err) {
               // console.log(err.errors.username.properties)
                console.log('name' + err.name);
                console.log(err);
                res.status(400).send({ 'error': helper.genericmongoerrorhandler(err) });

            }
            else {
                res.status(200).send({ 'user': u });
            }
        });
    }
});

