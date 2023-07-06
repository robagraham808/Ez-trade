async function getCartItems() {
  let cartItems = await fetch('/api/cart', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return cartItems;
}
window.addEventListener('DOMContentLoaded', async function () {
  let cartItems = await getCartItems();
  const itemsData = await cartItems.json();
  console.log('getCartItems', itemsData);
});

async function checkoutCart() {
  console.log('Checkout finctio  jsut ran! ');
  const items = await fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    //select all records from shoppingCart where buyer_id = current user
    body: JSON.stringify({
      itemsData,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((json = Promise.reject(json)));
      }
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
}

window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM conetent loaded');
  const checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.addEventListener('click', checkoutCart);
});
