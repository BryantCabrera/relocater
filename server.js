const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const axios = require('axios');
const convert = require('xml-js');
require('./db/db');

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
const countyRouter = require('./routers/counties');
const userRouter = require('./routers/users');

// use routers
app.use('/counties', countyRouter);
app.use('/users', userRouter);



// require api's
const zillowApi = require('./api/zillowApi');
const socrataApi = require('./api/socrataApi');





app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });