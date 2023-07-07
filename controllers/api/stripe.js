const router = require('express').Router();
const { Product, User, Category, ShoppingCart } = require('../../models');
const withAuth = require('../../utils/auth');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = 'process.env.YOUR_DOMAIN';

router.post('/', async (req, res) => {
  try {
    // const cartItem = req.body.get(req.body.id);

    console.log('REQUEST RECEIVED', req.body);


    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items:       req.body.items.map((item) => {
        const storeItem = storeItem.get(item.id);
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'test',
            },
            unit_amount: storeItem.product,
            quantity: 1,
          },
        };
      }),

      mode: 'payment',

      
      success_url: `https://google.com`,
      cancel_url: `https://google.com`,
    });
    res.redirect( session.url );
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/", async (req, res) => {
//   try {
//     // Create a checkout session with Stripe
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       // For each item use the id to get it's information
//       // Take that information and convert it to Stripe's format
//       line_items: req.body.items.map(({ id, quantity }) => {
//         const storeItem = storeItems.get(id)
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: 'name',
//             },
//             unit_amount: 100000,
//           },
//           quantity: 1,
//         }
//       }),
//       mode: "payment",
//       // Set a success and cancel URL we will send customers to
//       // These must be full URLs
//       // In the next section we will setup CLIENT_URL
//       success_url: `https://google.com`,
//       cancel_url: `https://google.com`,
//     })

//     res.json({ url: session.url })
//   } catch (e) {
//     // If there is an error send it to the client
//     res.status(500).json({ error: e.message })
//   }
// })

module.exports = router;
