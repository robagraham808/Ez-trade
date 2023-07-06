async function getCartItems() {
  const items = await fetch('/api/cart', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(items);
}

getCartItems();
