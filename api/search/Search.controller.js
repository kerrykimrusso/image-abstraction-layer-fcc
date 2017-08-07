const request = require('request');
const model = require('./Search.model');

module.exports = {
  list: function(req, res, next) {
      model.find((err, docs) => {
          if(err) {
              next(err);
              return;
          }

          res.json(docs).end();
      });
  },
  saveQuery: function(req, res, next) {
      model.create({ term: req.params.query })
        .then(next)
        .catch(next);
  },
  getImages: function(req, res, next) {
    request('https://google.com/search')
  }
}