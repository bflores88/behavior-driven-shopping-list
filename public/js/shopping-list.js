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
      //needs to be throw error
      return;
    }

    this.items.push(item);
  }

  removeItem(item) {
    if (item === undefined) {
      this.items.pop();
    }
    if (this.items.indexOf(item) === -1) {
      return;
    }
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

module.exports = ShoppingList;
