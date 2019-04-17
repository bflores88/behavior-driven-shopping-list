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
  for (let i = 0; i < cart.items.length; i++) {
    if (cart.items[i].isDone === true) {
      findCheckboxes[i].checked = true;
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

    let list = document.getElementById('list');

    let findCheckboxes = document.getElementsByClassName('checkbox');

    if (idx === 0 && list.length === 1) {
      content.innerHTML = '';
    } else {
      list.removeChild(list.childNodes[idx]);
      let newList = list.innerHTML;
      list.innerHTML = newList;
      for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].isDone === true) {
          findCheckboxes[i].checked = true;
        }
      }
    }

    let findXButton = document.getElementsByClassName('xButton');
    for (let i = 0; i < findXButton.length; i++) {
      findXButton[i].removeEventListener('click', function() {
        removeItemButtonClicked(i + 1);
      });
      findXButton[i].addEventListener('click', function() {
        removeItemButtonClicked(i);
      });
    }

    for (let i = 0; i < findCheckboxes.length; i++) {
      findCheckboxes[i].addEventListener('change', function() {
        changeCheckedStatus(i, findCheckboxes[i]);
      });
    }
  }
}
