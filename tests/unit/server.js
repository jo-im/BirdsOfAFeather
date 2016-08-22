var expect = require('chai').expect;
var assert = require('chai').assert;
var Assertion = require('chai').Assertion;
var AssertionError = require('chai').AssertionError;
var request = require('request');

describe('Server Unit Tests', function() {

  it('should respond to GET request to http://localhost:3000 with a 200 status code', (done) => {
    request('http://localhost:3000', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should respond to GET requests to unknown endpoints with a 404 status code', (done) => {
    request('http://localhost:3000/unknown', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

});