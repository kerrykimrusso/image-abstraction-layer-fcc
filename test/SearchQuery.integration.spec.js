const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../app')();
const SearchQueryModel = require('../api/search/Search.model');

mocha.describe('Endpoint /api/v1/imagesearch', () => {
  mocha.before((done) => {
    SearchQueryModel.create({ term: 'my first search' });
    SearchQueryModel.create({ term: 'my second search' });
    SearchQueryModel.create({ term: 'my third search' });
  });
  
  mocha.it('should list history of search terms ordered by date in descending order', (done) => {
    chai.request(app)
      .get('/api/v1/imagesearch')
      .end((err, res) => {
        console.log(res);
        done();
      });
  });
});