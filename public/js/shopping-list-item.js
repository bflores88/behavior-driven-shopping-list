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
    return `<li class="completed_${this.isDone}"><input type="checkbox" class="checkbox"><span>${
      this.name
    }</span> <span>${this.description}</span><button class='xButton' type="button">X</button></li>`;
  }
}
