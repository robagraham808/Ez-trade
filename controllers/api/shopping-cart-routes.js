const router = require('express').Router();
const { User, Category, Product, ShoppingCart } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const shoppingCarts = await ShoppingCart.findAll({
      include: [{ model: Product }, { model: User }],
    });
    res.status(200).json(shoppingCarts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log("test-------------------------", req.body);
    const newCart = await ShoppingCart.create(req.body);
    res.status(200).json(newCart);
    console.log(newCart);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteItem = await ShoppingCart.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deleteItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/test/:id', async (req, res) => {
  try {
    const deleteItem = await ShoppingCart.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deleteItem);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
