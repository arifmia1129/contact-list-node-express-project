const express = require('express');

const contactRouter = require('./contactRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/contacts', contactRouter);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


module.exports = app;