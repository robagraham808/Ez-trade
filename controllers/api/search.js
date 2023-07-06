const { Product, Category } = require('../../models');
const router = require('express').Router();



router.get('/searchresults/:id', async (req, res) => {
  const { categoryId } = req.query;

  try {
    const categoryDb = await Category.findByPk(categoryId);

    const category = categoryDb.get({ plain:true});


    if (!category) {
      res.status(404).json({ message: 'No category found with this ID!' });
      return;
    }

    const products = await Product.findAll({
      where: { categoryId },
    });

    const product = products.get({ plain:true});


    res.render('searchresults', { category, product });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
