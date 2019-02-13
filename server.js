const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const socketio = require('socket.io');
const session = require('express-session');
const passport = require('passport');

const authRouter = require('./lib/auth.router')
const passportInit = require('./lib/passport.init')

const server = require('http').Server(app)

require('dotenv').config()
// require('./config/passport');
// require('./lib/passport.init')
require('./db/db');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewear
app.use(express.static(path.join(__dirname, 'build')));
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Setup for passport and to accept JSON objects
app.use(express.json())
app.use(passport.initialize())
passportInit()

// Accept requests from the client
// app.use(cors({
//   origin: 'http://localhost:3000'
// })) 

// saveUninitialized: true allows us to attach the socket id to the session
// before we have athenticated the user
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    resave: true, 
    saveUninitialized: true 
}))

// cors
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,
//     optionsSuccessStatus: 200
// }

app.use(cors());

// Connecting sockets to the server and adding them to the request 
// so that we can access them later in the controller
const io = socketio(server)
app.set('io', io)


// require routers
const indexRouter = require('./routers');
const apiRouter = require('./routers/api');
const countyRouter = require('./routers/counties');
const userRouter = require('./routers/users');

// use routers
app.use('/', authRouter);
app.use('/api', apiRouter);
app.use('/counties', countyRouter);
app.use('/users', userRouter);

// app.use('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// start server on 9000
//temporary view using ejs for Google Login testing
// app.get('/', (req, res) => {
//     res.render('index.ejs');
// });

server.listen(3030)

app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});