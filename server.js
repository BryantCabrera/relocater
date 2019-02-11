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



const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


// require controllers
const apiRouter = require('./routers/api');
const countyController = require('./controllers/countyController');
const userController = require('./controllers/userController');

// use controllers
app.use('/api', apiRouter);
app.use('/counties', countyController);
app.use('/users', userController);







app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });