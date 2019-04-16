const ShoppingList = require('../public/js/app.js');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect();

describe('Shopping List', function() {
  it('should be a function', function() {
    ShoppingList.should.be.a('function');
  });
});

console.log(ShoppingList);
