let cart = new ShoppingList();
let addItemButton = document.getElementById('addShoppingListItemButton');
addItemButton.addEventListener('click', addToShoppingList);

function addToShoppingList() {
  let newShoppingListItem = new ShoppingListItem(title.value, description.value);
  cart.addItem(newShoppingListItem);
  let output = cart.render();
  content.innerHTML = output;
 
}

let findCheckboxes = document.getElementsByClassName('checkbox');

for(let i=0; i<findCheckboxes.length; i++){
  // console.log(findCheckboxes[i].checked);
  findCheckboxes[i].addEventListener('onchange', changeCheckedStatus(i, findCheckboxes[i]));
}



function changeCheckedStatus(idx, checkbox){
  console.log(this.checked);
  if(checkbox.checked){
    console.log(true);
    // console.log(cart.items[idx].check());
    // console.log(cart.items[idx]);
  } else {
    cart.items[idx].unCheck();
  }
  
}

