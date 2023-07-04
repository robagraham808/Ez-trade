const router = require('express').Router();
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const cartRoutes = require('./shopping-cart-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/cart', cartRoutes);

module.exports = router;
