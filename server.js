const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

require('dotenv').config()
require('./db/db');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// middlewear
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cors
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// require routers
const apiRouter = require('./routers/api');
const countyRouter = require('./routers/counties');
const userRouter = require('./routers/users');

// use routers
app.use('/api', apiRouter);
app.use('/counties', countyRouter);
app.use('/users', userRouter);

// start server on 9000
app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });