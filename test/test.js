const testFunctions = require('../index.js');

// Day 1
var assert = require('assert');
describe('Day 1', function() {
  describe('gridSize()', function() {
    it('should tell you the size of your grid in the format width x height', function() {
      assert.equal(testFunctions.gridSize(), "10 x 10");
    });
  });
});

// TODO: Add the rest of the tests, make a pull request if you want to help out
