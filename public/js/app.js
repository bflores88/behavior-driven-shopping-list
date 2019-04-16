class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check(){
    this.isDone = true;
  }
}

module.exports = ShoppingListItem;
