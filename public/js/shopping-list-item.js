'use strict';

class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    this.isDone = true;
  }

  unCheck() {
    this.isDone = false;
  }

  render() {
    return `<li class="completed_${this.isDone}"><span class="grocery">${
      this.name
    }</span> <span class="groceryDescription">${this.description}</span><input type="checkbox" class="checkbox"><button class='xButton' type="button">X</button></li>`;
  }
}
