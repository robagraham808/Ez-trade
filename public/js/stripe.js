const buyer_id = document.querySelector('.user-info').innerText;

async function getCartItems() {
  let cartItems = await fetch(`/checkout/${buyer_id}`, {
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

const test = "test"

async function checkoutCart() {
  let cartItems = await getCartItems();
  const itemsData = await cartItems.json();
  console.log('getCartItems', itemsData[1].product.product_name);


  for (let i = 0; i < itemsData.length; i++) {
    itemsData[i].product = itemsData[i].product.price;
    // itemsData[i].user = itemsData[i].product.product_name;

  };



  fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Send along all the information about the items
    body: JSON.stringify({
      items: itemsData,
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      // If there is an error then make sure we catch that
      return res.json().then(e => Promise.reject(e))
    })
    .then(({ url }) => {
      // On success redirect the customer to the returned URL
      window.location = url
    })
    .catch(e => {
      console.log(e)
    })
}

window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM conetent loaded');
  const checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.addEventListener('click', checkoutCart);
});
