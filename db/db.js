const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/relocater', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

mongoose.connection.on('error', (err) => {
    console.log(err, 'mongoose error, failed to connect');
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose is disconnected');
});