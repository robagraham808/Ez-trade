const router = require('express').Router();
const { Product, User, Category } = require('../models');
const withAuth = require('../utils/auth');
const stripe = require('stripe')(
  'pk_test_51NOWTXH2DqOaWvLbWSVvvq6dyFiGjM67PjYRogE0xtu9w3bssGxW9k0yEJIma5s9iTs7rHIkKYJ7CR7cgXU1hkyS00ElT0DSLN'
);

const YOUR_DOMAIN = 'http://localhost:3006';

router.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        id: '{{Product.id}}',
        price: '{{Product.price}}',
        quantity: 1,
        product_data: {
          name: '{{Product.product_name}}',
        },
        description: '{{Product.longDescription}}',
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cart.html`,
  });
  res.send({ url: session.url });
});

module.exports = router;
