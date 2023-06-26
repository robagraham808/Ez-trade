const router = require('express').Router();
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;
