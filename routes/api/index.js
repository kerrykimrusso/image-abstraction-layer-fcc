const router = require('express').Router();
const SearchController = require('../../api/search/Search.controller');

router.get('/api/v1/imagesearch', SearchController.list);
router.get('/api/v1/imagesearch/:query', SearchController.saveQuery, SearchController.getImages);

module.exports = router;