const ShoppingListItem = require('../public/js/app.js');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('Shopping List', function() {
  //class test
  it('should be a function', function() {
    ShoppingListItem.should.be.a('function');
  });

  //name test
  it('should have a property named name', function() {
    let apple = new ShoppingListItem('Apple');
    apple.name.should.equal('Apple');
  });

  //description and constructor tests
  it('should have a property named description', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.description.should.equal('tasty treat');
  });

  //isDone test
  it('should have a property named isdone', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.isDone.should.equal(false);
  });

  it('should have a constructor that acecpts two arguments: name and description', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.description.should.equal('tasty treat');
    apple.name.should.equal('Apple');
  });

  //check test
  it('check should be a function', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    expect(apple.check).to.be.a('function');
  });

  it('expect check method to set isDone to true', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.check();
    apple.isDone.should.equal(true);
  });

  //uncheck test
  it('unCheck should be a function', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    expect(apple.unCheck).to.be.a('function');
  });

  it('expect unCheck method to set isDone to false', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    apple.unCheck();
    apple.isDone.should.equal(false);
  });

  //render test
  it('render should be a function', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    expect(apple.render).to.be.a('function');
  });

  it('expect render to return an HTML-formatted string', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    (apple.render()).should.equal('<li class="completed_false"><span>Apple</span> <span>tasty treat</span></li>')
  });



});

console.log(ShoppingListItem);
