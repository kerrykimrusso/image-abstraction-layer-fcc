const http = require('http');
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
    let opts = {
      host: "https://google.com",
      path: "/search?q=" + req.params.query
    };
    
    http.request(opts, (res) => {
      console.log(res);
    });
  }
}