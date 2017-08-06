const mongoose = require('mongoose');
const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../app')();
const SearchQueryModel = require('../api/search/SearchQuery.model');

mocha.before((done) => {
  mongoose.connect(process.env.MONGOTESTDB).then(
    done,
    console.log.bind(console, 'integration test could not connect with following error:')
  )
});

mocha.describe('Endpoint /api/v1/imagesearch', () => {
  mocha.before((done) => {
    SearchQueryModel.
  });
  
  mocha.it('should list history of serach terms ordered by date in descending order', (done) => {
    chai.
  });
});