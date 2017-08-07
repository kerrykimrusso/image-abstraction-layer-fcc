const router = require('express').Router();
const SearchQueryController = require('../../api/search/Search.controller');

router.get('/api/v1/imagesearch', SearchQueryController.list);
router.get('/api/v1/imagesearch/:query', SearchQueryController.saveQuery);

module.exports = router;