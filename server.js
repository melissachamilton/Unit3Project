require('dotenv').config()
const mongoose = require('mongoose')
// CONNECTING DATABASE
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  const connection = mongoose.connection
  connection.on('connected', () => {
    console.log('Mongoose Connected Successfully')
  })
  // If the connection throws an error
  connection.on('error', err => {
    console.log(`Mongoose default connection error: ${err}`)
  })

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(`${__dirname}/client/build/`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })

  const listingsController = require('./routes/listingsController')
  const locationsController = require('./routes/locationsController')
  
  app.use('/api/locations', locationsController)
  app.use('/api/locations/:locationId/listings', listingsController)

module.exports = app;
