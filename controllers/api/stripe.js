const router = require('express').Router();
const { Product, User, Category, ShoppingCart } = require('../../models');
const withAuth = require('../../utils/auth');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = 'process.env.YOUR_DOMAIN';

router.post('/', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currenct: 'usd',
            product_data: {
              name: storeItem.product_name,
            },
            unit_amount: storeItem.price * 100,
            quantity: 1,
          },
        };
      }),
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cart.html`,
    });
    res.send({ url: session.url });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
