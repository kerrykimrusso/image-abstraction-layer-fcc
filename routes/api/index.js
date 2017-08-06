const SearchQueryController = require('../../api/search/SearchQuery.controller');

module.exports = function(app) {
  app.get('/api/v1/imagesearch', SearchQueryController.list);
}