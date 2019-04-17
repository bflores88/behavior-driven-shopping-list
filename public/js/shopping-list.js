'use strict';

class ShoppingList {
  constructor() {
    this.items = [];
    this.emptyCart = function() {
      this.items = [];
    };
  }

  addItem(item) {
    if (!(item instanceof ShoppingListItem)) {
      throw new Error('needs to be shopping list item!');
    }

    this.items.push(item);
  }

  removeItem(item) {
    if (item === undefined) {
      this.items.pop();
      return;
    }
    if (this.items.indexOf(item) === -1) {
      throw new Error('item not found!');
    }
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
  // render
  render() {
    let output = "<ul id='list'>";
    for (let i = 0; i < this.items.length; i++) {
      output += this.items[i].render();
    }
    output += '</ul>';
    return output;
  }
}
