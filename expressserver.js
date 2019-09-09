var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./Server/approutes/mainroutes');
var mongoose = require('mongoose');
var flash = require('connect-flash');
const passportGoogleSetup = require('./Server/configs/passportgoogle_setup.js');
const passportLocalSetup = require('./Server/configs/passportlocal_setup.js');
const cookieSession = require('cookie-session');
const passport=require('passport');
const appkeys=require('./appkeys.js')

var app = express();

//connect to mongodb
var db = mongoose.connect("mongodb://localhost/myapp", { useNewUrlParser: true, useCreateIndex: true });

// To serve the static content
app.use(express.static(__dirname + '/Client/dist'));

//configure cookie session

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys:[appkeys.session.cookieKey],
    
}))

//initialize passport
app.use(passport.initialize());

app.use(passport.session());



//cookie parser
//app.use(express.cookieParser());

// To parse the req body to application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))
// To parse the req body to application/json
app.use(bodyparser.json());

//use flash on local password auth
app.use(flash());


//app routers
app.use('/api', routes);



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Client/dist/index.html')
});

app.all('*/**', function (req, res) {
    res.sendFile(__dirname + '/Client/dist/index.html')
});


var port = 3000;
app.listen(port, () => {
    console.log('Server is up and running at localhost:' + port);
});

