const model = require('./SearchQuery.model');

module.exports = {
    list: function(req, res, next) {
        model.find((err, docs) => {
            if(err) {
                next(err);
                return;
            }

            res.json(docs).end();
        });
    } 
}