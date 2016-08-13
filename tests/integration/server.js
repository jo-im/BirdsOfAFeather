
var expect = require('chai').expect;
var assert = require('chai').assert;
var Assertion = require('chai').Assertion;
var AssertionError = require('chai').AssertionError;
var request = require('request');

describe('Server Integration', function() {

  it('should respond to GET request to localhost with a 200 status code', function(done) {
    request('https://murmuring-dusk-10598.herokuapp.com/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });

  });
});

describe('Food Facts API Integration', function() {
  var requestParams;
  beforeEach(function() {
    requestParams = {
      method: 'POST',
      uri: 'https://murmuring-dusk-10598.herokuapp.com/api/foodfacts/upc/',
      form: {
        event: {
          data: '0014100085461'
        }
      }, 
    };
  });
  
  it('should respond to POST request to Food Facts API with a status code 200', function(done) {
    this.timeout(5000);
    request(requestParams, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return an object', function(done) {
    this.timeout(5000);
    request(requestParams, function(error, response, body) {
      expect(JSON.parse(body)).to.be.an('object');
      done();
    });
  });

});

describe('Facebook Oauth Integtration', function() {
  it('should return the User\'s return a Facebook ID', function(done) {
    // function call to facebook
    // expect().to.be.an('string')
    done();
  });
});
