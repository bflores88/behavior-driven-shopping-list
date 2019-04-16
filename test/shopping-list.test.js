const ShoppingListItem = require('../public/js/app.js');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect();

describe('Shopping List', function() {
  it('should be a function', function() {
    ShoppingListItem.should.be.a('function');
  });

  it('should have a property named name', function() {
    let apple = new ShoppingListItem('Apple');
    apple.name.should.equal('Apple');
  });

  it('should have a property named description', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.description.should.equal('tasty treat');
  });
});

console.log(ShoppingListItem);
