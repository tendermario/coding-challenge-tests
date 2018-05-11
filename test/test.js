const testFunctions = require('../index.js');
const assert = require('chai').assert;

// Day 1
describe('Day 1', function() {
  describe('gridSize()', function() {
    it('should tell you the size of your grid in the format width x height', function() {
      assert.equal(testFunctions.gridSize(), "10 x 10");
    });
  });
});

// Day 3
describe('Day 3', function() {
  describe('lightCell()', function() {
    it('should return the value at the position from the grid, e.g. F9 is blank', function() {
      assert.equal(testFunctions.lightCell("F9"), "");
    });
  });
});

// Day 9
describe('Day 9', function() {
  describe('isSafe()', function() {
    it(`should take a coordinate in the format 'H2' and returns true or false`, function() {
      assert.isBoolean(testFunctions.isSafe('H2'));
    });
    it(`should take a coordinate in the format 'F8' and return true`, function() {
      assert.equal(testFunctions.isSafe('F8'), true);
    });
    it(`should take a coordinate in the format 'D7' and return true`, function() {
      assert.equal(testFunctions.isSafe('D7'), true);
    });
    it(`should take a coordinate 1 away from F8 (F9) and all return true`, function() {
      assert.equal(testFunctions.isSafe('F9'), true);
    });
    it(`should take a coordinate 1 away from F8 (F7) and all return true`, function() {
      assert.equal(testFunctions.isSafe('F7'), true);
    });
    it(`should take a coordinate 1 away from F8 (E7) and all return true`, function() {
      assert.equal(testFunctions.isSafe('E7'), true);
    });
    it(`should take a coordinate 1 away from F8 (G7) and all return true`, function() {
      assert.equal(testFunctions.isSafe('G7'), true);
    });
  });
});

// Day 14
describe('Day 14', function() {
  describe('isDangerous()', function() {
    it(`should take a coordinate in the format 'H2' and returns true or false`, function() {
      assert.isBoolean(testFunctions.isDangerous('H2'));
    });
    it(`should take a coordinate in the format 'F8' and return false`, function() {
      assert.equal(testFunctions.isDangerous('F8'), false);
    });
  });
});

// Day 15
describe('Day 15', function() {
  describe('distressBeacon()', function() {
    it(`should take a coordinate in the format 'H2' and returns a different coordinate in the same format`, function() {
      assert.include(['E7', 'F7', 'F8'], testFunctions.distressBeacon('E8'));
    });
  });
});

// Day 16
describe('Day 16', function() {
  describe.skip('Add a rock added to J9', function() {
    // figure out a way to add this test without giving away the answer
  });
});

// Day 17
describe.skip('Day 17', function() {
  describe('percentageReport()', function() {
    it(`should return an array of the percentages of the grid being rocks and currents, e.g. [10, 7]`, function() {
      let arr = testFunctions.percentageReport();
      assert.isArray(arr);
      assert.equal(arr[0], 10);
      assert.equal(arr[1], 7);
    });
    it.skip(`should be rounded to two decimal places if the result is a fraction`, function() {
      // Not sure how to create this test
    });
  });
});

// Day 20
describe('Day 20', function() {
  describe('calcDistance()', function() {
    it(`should return the distance between two points on a grid, e.g. calcDistance('A1', 'C3') should return 2.83`, function() {
      assert.equal(2.83, testFunctions.calcDistance('A1', 'C3'));
    });
  });
});

// TODO: Add the rest of the tests, make a pull request if you want to help out
