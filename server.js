// server.js
// where your node app starts

// init project
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = require('./app');

mongoose.connect(process.env.MONGODB).then(app, 
  (err) => {
    throw err; 
  });
