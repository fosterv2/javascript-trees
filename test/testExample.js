const expect = require('chai').expect
const should = require('chai').should()

describe('Array', function () {
  describe.skip('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
    it('should return the index when present', function(){
      expect([1, 2, 3].indexOf(2)).to.equal(1);
    })
  });
});

describe('Array', function () {
  describe.skip('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });

    it('does nothing and passes', function () {
      
    })
  });
});
