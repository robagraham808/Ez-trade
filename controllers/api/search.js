const { Product, Category } = require('../../models');

router.get('/searchresults', async (req, res) => {
  const { Category } = req.query;

  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        where: {
          id: category
        }
      }
    });

    res.render('searchresults', { products }); // Render the search results view with the found products
  } catch (error) {
    console.error('Error occurred during search:', error);
    res.status(500).send('Internal Server Error');
  }
});