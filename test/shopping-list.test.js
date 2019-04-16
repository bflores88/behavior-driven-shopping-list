const ShoppingListItem = require('../public/js/app.js');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

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

  it('should have a property named isdone', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.isDone.should.equal(false);
  });

  it('should have a constructor that acecpts two arguments: name and description', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.description.should.equal('tasty treat');
    apple.name.should.equal('Apple');
  });

  it('check should be a function', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    expect(apple.check).to.be.a('function');
  });

  it('expect check method to set isDone to true', function (){
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.check();
    apple.isDone.should.equal(true);
  });
});

console.log(ShoppingListItem);
