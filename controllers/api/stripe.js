const router = require('express').Router();
const { Product, User, Category, ShoppingCart } = require('../../models');
const withAuth = require('../../utils/auth');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = 'http://localhost:3006';

router.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 2,
      },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Jeans',
          },
          unit_amount: 9000,
        },
        quantity: 4,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cart.html`,
  });
  res.send({ url: session.url });
});

module.exports = router;
