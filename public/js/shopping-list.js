const ShoppingListItem = require('../js/shopping-list-item.js');

class ShoppingList {
  constructor() {
    this.items = [];
    this.emptyCart = function() {
      this.items = [];
    };
  }

  addItem(item) {
    if (!(item instanceof ShoppingListItem)) {
      throw TypeError('meow');
    
    }

    this.items.push(item);
  }
}

module.exports = ShoppingList;
