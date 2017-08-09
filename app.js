const express = require('express');
const logger = require('morgan');
const routes = require('./routes/api');

module.exports = function() {  
  const app = express();

  app.use(logger('dev'));
  // http://expressjs.com/en/starter/static-files.html
  app.use(express.static('public'));
  
  // http://expressjs.com/en/starter/basic-routing.html
  app.get("/", function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });
  
  app.use(routes);

  // listen for requests :)
  const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
};