const addToCartHandler = async (event) => {
  event.preventDefault();

  const buyer_id = req.session.user_id;
  const response = await fetch('/api/cart', {
    method: 'POST',
    body: JSON.stringify({}), //Need to add correct parameters
    headers: { 'Content-Type': 'application/json' },
  });
};

document
  .querySelector('.add-to-cart')
  .addEventListener('click', addToCartHandler);
