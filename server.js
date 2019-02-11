const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config()
require('./config/passport');
require('./db/db');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// middlewear
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// require routers
const indexRouter = require('./routers');
const apiRouter = require('./routers/api');
const countyRouter = require('./routers/counties');
const userRouter = require('./routers/users');

// use routers
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/counties', countyRouter);
app.use('/users', userRouter);

//temporary view using ejs for Google Login testing
// app.get('/', (req, res) => {
//     res.render('index.ejs');
// });

app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});