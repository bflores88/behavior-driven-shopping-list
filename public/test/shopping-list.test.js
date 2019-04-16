
const should = chai.should();
const expect = chai.expect;

describe('Shopping List Item', function() {
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
    apple.render().should.equal('<li class="completed_false"><span>Apple</span> <span>tasty treat</span></li>');
  });
});

describe('Shopping List', function() {
  //class test
  it('should be a function', function() {
    ShoppingList.should.be.a('function');
  });

  //tests for items property
  it('should have a property named items', function() {
    let cart = new ShoppingList();
    expect(cart.items).to.deep.equal([]);
  });

  // empty cart method
  it('empty cart should be a function', function() {
    let cart = new ShoppingList();
    expect(cart.emptyCart).to.be.a('function');
  });
  it('empty cart should initialize items as an empty array', function() {
    let cart = new ShoppingList();
    cart.emptyCart();
    expect(cart.items).to.deep.equal([]);
  });

  //add item
  it('should only add shopping list item items', function() {
    let cart = new ShoppingList();
    let bird = {};
    expect(function(){(cart.addItem(bird))}).to.throw(Error);
  });

  it('should add shopping list item to the items array', function() {
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    let cart = new ShoppingList();
    cart.addItem(apple);
    expect(cart.items).to.deep.equal([apple]);
  });

  // remove item
  it('should remove the item passed into the method', function() {
    let cart = new ShoppingList();
    let bird = new ShoppingListItem('Apple', 'tasty treat');
    cart.addItem(bird);
    cart.removeItem(bird);
    expect(cart.items).to.deep.equal([]);
  });

  it('should remove the last item in the array if no parameters are added', function() {
    let cart = new ShoppingList();
    let bird = new ShoppingListItem('Apple', 'tasty treat');
    cart.addItem(bird);
    cart.removeItem();
    expect(cart.items).to.deep.equal([]);
  });

  it('should throw error if item not found in array', function() {
    let cart = new ShoppingList();
    let bird = new ShoppingListItem('Apple', 'tasty treat');
    let banana = {};
    cart.addItem(bird);
    expect(function(){(cart.removeItem(banana))}).to.throw(Error);
  });
  // render
  it('should concatenate the result of calling render on each item in items array', function() {
    let cart = new ShoppingList();
    let apple = new ShoppingListItem('Apple', 'tasty treat');
    let banana = new ShoppingListItem('Banana', 'yellow treat');
    cart.addItem(apple);
    cart.addItem(banana);
    cart
      .render()
      .should.equal(
        '<ul><li class="completed_false"><span>Apple</span> <span>tasty treat</span></li><li class="completed_false"><span>Banana</span> <span>yellow treat</span></li></ul>',
      );
  });
});
