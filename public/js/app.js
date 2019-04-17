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
  let findXButton = document.getElementsByClassName('xButton');
  for (let i = 0; i < findXButton.length; i++) {
    findXButton[i].addEventListener('click', function() {
      removeItemButtonClicked(i);
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

function removeItemButtonClicked(idx) {
  cart.removeItem(cart.items[idx]);
  // let output = cart.render();
  // content.innerHTML = output;
  let list = document.getElementById('list');
  list.removeChild(list.childNodes[idx]);

  // let findXButton = document.getElementsByClassName('xButton');
  // for (let i = 0; i < findXButton.length; i++) {
  //   findXButton[i].addEventListener('click', function() {
  //     removeItemButtonClicked(i);
  //   });
  // }

  let findCheckboxes = document.getElementsByClassName('checkbox');

  for (let i = 0; i < findCheckboxes.length; i++) {
    findCheckboxes[i].addEventListener('change', function() {
      changeCheckedStatus(i, findCheckboxes[i]);
    });
  }
}
