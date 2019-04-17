let cart = new ShoppingList();
let addItemButton = document.getElementById('addShoppingListItemButton');
addItemButton.addEventListener('click', addToShoppingList);

function addToShoppingList() {
  let newShoppingListItem = new ShoppingListItem(title.value, description.value);
  cart.addItem(newShoppingListItem);
  let output = cart.render();
  content.innerHTML = output;

  let findCheckboxes = document.getElementsByClassName('checkbox');

  for (let i = 0; i < findCheckboxes.length; i++) {
    findCheckboxes[i].addEventListener('change', function() {
      changeCheckedStatus(i, findCheckboxes[i]);
    });
  }
}

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) {
    cart.items[idx].check();
  } else {
    cart.items[idx].unCheck();
  }
}
