const https = require('follow-redirects').https;
const ImageSearch = require('image-search-google');
const imgSearch = new ImageSearch(process.env.CX, process.env.GOOGLECSAPIKEY);
const model = require('./Search.model');

module.exports = {
  list: function(req, res, next) {
      model.find({}).select("term when -_id").then((docs) => {
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
    const opts = {
      page: 1
    };
    
    imgSearch.search(req.params.query, opts)
      .then(images => { 
        res.json(images);
      })
      .catch(console.log.bind(console));
  }
}