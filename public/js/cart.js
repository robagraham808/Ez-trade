
var addToCartButtons = document.querySelector('.add-to-cart');
var deleteFromCartButtons = document.querySelectorAll('.remove-from-cart');

// deleteFromCartButtons.forEach(function (deleteFromCartButton) {
//   deleteFromCartButton.addEventListener('click', deleteItemFromCart);
// });

async function addItemToCart() {
  let currentCart = parseInt(document.getElementById('amount-items-cart').innerText);
  let cartCount = document.getElementById('amount-items-cart');

  const product_id = document.querySelector('#product-info').innerText;
  const buyer_id = document.querySelector('.user-info').innerText;

  const shoppingCart = await fetch('/api/cart', {
    method: 'POST',
    body: JSON.stringify({ product_id, buyer_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  currentCart++;

  cartCount.textContent = currentCart;

};

window.addEventListener('DOMContentLoaded', async function () {
  console.log('Buttonw went click!');
  addToCartButtons.addEventListener('click', addItemToCart);
});


var deleteButtons = document.querySelectorAll('.remove-from-cart');

const cartContainer = document.getElementById('cartview-body');

const cartItemId = document.getElementById('cart-id');



const deleteHandler = function(event) {
  let deleteId = parseInt(event.target.getAttribute('delete-id'));
  let cartItemCounter = document.querySelectorAll('.cart-item-name');
  const cartItemCount = document.getElementById('ammount-of-items');
  let amountItemsCart = document.getElementById('amount-items-cart');

  let numberOfItems = cartItemCounter.length;
  if (event.target.matches('button')) {
    fetch(`/api/cart/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      event.target.closest('.cart-item').remove();
      numberOfItems--;
      cartItemCount.textContent = `Subtotal Items: ${numberOfItems}`;
      amountItemsCart.textContent = numberOfItems
    })
  }
};



cartContainer.addEventListener('click', deleteHandler);

console.log(itemCount);

var shoppingCartButton = document.querySelector('.shopping-cart-icon');
var cartCounter = document.querySelectorAll('.cart-counter');

async function getCartValue() {
  let cartValue = await fetch(`/cart/:buyer_id`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(cartValue);

  for (i = 0; i < cartCounter.length; i++) {
    cartCounter[i].innerText = cartValue;
  }
};

window.addEventListener('DOMContentLoaded', getCartValue);
