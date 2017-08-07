const http = require('http');
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
    let opts = {
      host: "https://google.com",
      path: "/search?q=" + req.params.query
    }
    
    http.request(opts, (err, res) => {
      if(err) next
      
    });
    // {"url":"https://i.ytimg.com/vi/8nOsEEBrEuA/hqdefault.jpg",
    // "snippet":"LOLCats in All Fired Up lol Cats Rock Funny Cats - YouTube",
    // "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWNpmeNmLlMNc0v32tK83j4eOrOPVS6M2kty-CVFzQTvbS9d9WdKfrg7E",
    // "context":"https://www.youtube.com/watch?v=8nOsEEBrEuA"}
    res.send('getImages()').end();
  }
}