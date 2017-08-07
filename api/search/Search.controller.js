const model = require('./Search.model');

module.exports = {
  list: function(req, res, next) {
      model.find({}).select("term when -_id").then((err, docs) => {
          if(err) {
              next();
              return;
          }

          res.json(docs).end();
      });
  },
  saveQuery: function(req, res, next) {
      model.create({ term: req.params.query })
        .then((doc) => {
          next();
        })
        .catch(() => {
          next();
        });
  },
  getImages: function(req, res, next) {
    res.send('getImages()').end();
  }
}