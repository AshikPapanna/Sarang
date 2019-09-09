var mainrouter = require('express').Router();


mainrouter.use('/auth', require('./userroutes.js'));

mainrouter.use('/dashboard',require('./dashboardroutes.js'));


module.exports = mainrouter;