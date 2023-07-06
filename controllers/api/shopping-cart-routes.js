const router = require('express').Router();
const { User, Category, Product, ShoppingCart } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/cart', async (req, res) => {
  try {
    const shoppingCarts = await ShoppingCart.findAll({
      include: [{ model: Product }, { model: User }],
    });
    res.status(200).json(shoppingCarts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/cart', withAuth, async (req, res) => {
  try {
    const newCart = await ShoppingCart.create({
      ...req.body,
      buyer_id: req.session.user_id,
    });
    res.status(200).json(newCart);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/cart/:id', withAuth, async (req, res) => {
  try {
    const newCart = await ShoppingCart.destroy({
      where: {
        user_id: req.session.user_id,
      },
    });

    if (!newCart) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
