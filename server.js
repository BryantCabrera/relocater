const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const server = http.Server(app);
const socketio = require('socket.io')(server);

const authRouter = require('./lib/auth.router');
const passportInit = require('./lib/passport.init');

require('dotenv').config();
require('./db/db');


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewear
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Setup for passport and to accept JSON objects
app.use(express.json());
app.use(passport.initialize());
passportInit();

// saveUninitialized: true allows us to attach the socket id to the session
// before we have athenticated the user
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: true, 
    saveUninitialized: true 
}));

app.use(cors());

// Connects sockets to the server and adds them to the request 

app.set('io', socketio);


// console.log(app);


// requires routers
const indexRouter = require('./routers');
const apiRouter = require('./routers/api');
const countyRouter = require('./routers/counties');
const userRouter = require('./routers/users');

// uses routers
app.use('/', authRouter);
app.use('/api', apiRouter);
app.use('/counties', countyRouter);
app.use('/users', userRouter);

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


server.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});