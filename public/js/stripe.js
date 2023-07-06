

const checkout = document.querySelector('.checkout-button');
checkout.addEventListener("click", checkoutFunction)

async function checkoutFunction() {
    const shoppingCart = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({price, product_name }),
        headers: {'Content-Type':'application/json'},
      });
  
};