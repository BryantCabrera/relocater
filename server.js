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


// require controllers
const countyController = require('./controllers/countyController');
const userController = require('./controllers/userController');

// use controllers
app.use('/counties', countyController);
app.use('/users', userController);



// require api's
const zillowApi = require('./api/zillowApi');
const socrataApi = require('./api/socrataApi');





app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });