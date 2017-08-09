const https = require('follow-redirects').https;
const ImageSearch = require('image-search-google');
const imgSearch = new ImageSearch(process.env.CX, process.env.GOOGLECSAPIKEY);
const model = require('./Search.model');

module.exports = {
  list: function(req, res, next) {
      model.find({}).select("term when -_id").then(docs => {
          res.json(docs).end();
      }).catch(console.log.bind(console));
  },
  saveQuery: function(req, res, next) {
      model.create({ term: req.params.query })
        .then(doc => {
          next();
        })
        .catch(console.log.bind(console));
  },
  getImages: function(req, res, next) {
    let offset = parseInt(req.query.offset) || 1;
    const opts = {
      page: offset
    };
    
    imgSearch.search(req.params.query, opts)
      .then(images => { 
        res.json(images);
      })
      .catch(console.log.bind(console));
  }
}