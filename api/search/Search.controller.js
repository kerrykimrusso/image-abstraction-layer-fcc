const https = require('follow-redirects').https;
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
    https.get('https://google.com/search?site=imghp&q=' + encodeURIComponent(req.params.query), (getres) => {
      let str = '';
      getres.on('data', (chunk) => {
        str += chunk;
      });
      
      getres.on('end', (chunk) => {
        console.log(str);
        // res.send(str).end();
      });
    }).on('error', console.log.bind(console));
    
    // {"url":"https://i.ytimg.com/vi/8nOsEEBrEuA/hqdefault.jpg",
    // "snippet":"LOLCats in All Fired Up lol Cats Rock Funny Cats - YouTube",
    // "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWNpmeNmLlMNc0v32tK83j4eOrOPVS6M2kty-CVFzQTvbS9d9WdKfrg7E",
    // "context":"https://www.youtube.com/watch?v=8nOsEEBrEuA"}
  }
}