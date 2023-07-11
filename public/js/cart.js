// let itemCount = 0;
// var itemCountLabel = document.querySelectorAll('.cart-counter');

// for (let i = 0; i < itemCountLabel.length; i++) {
//   itemCountLabel[i].textContent = itemCount;
// }

var addToCartButtons = document.querySelector('.add-to-cart');
var deleteFromCartButtons = document.querySelectorAll('.remove-from-cart');

deleteFromCartButtons.forEach(function (deleteFromCartButton) {
  deleteFromCartButton.addEventListener('click', deleteItemFromCart);
});

async function addItemToCart() {
  console.log('Add-item-to-cargt');

  //probably will work with stripe
  // itemCount = itemCount + 1;
  const product_id = document.querySelector('#product-info').innerText;
  const price = document.querySelector('.product-price').innerText;
  const buyer_id = document.querySelector('.user-info').innerText;

  console.log(product_id, price, buyer_id);
  console.log('Add-item-to-cart');
  const shoppingCart = await fetch('/api/cart', {
    method: 'POST',
    body: JSON.stringify({ product_id, buyer_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(shoppingCart);
}
window.addEventListener('DOMContentLoaded', function () {
  console.log('Buttonw went click!');
  addToCartButtons.addEventListener('click', addItemToCart);
});


function deleteItemFromCart() {
  if (itemCount > 0) {
    // itemCount = itemCount - 1;
  }
}

console.log(itemCount);

var shoppingCartButton = document.querySelector('.shopping-cart-icon');
