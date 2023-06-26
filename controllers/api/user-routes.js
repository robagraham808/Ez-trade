const router = require('express').Router();
const { User, Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
