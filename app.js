const express = require('express');

const contactRouter = require('./contactRoute');

const app = express();


app.use('/contacts', contactRouter);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


module.exports = app;