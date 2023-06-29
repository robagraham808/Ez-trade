const router = require ('express').Router();
const { Product, User, Category } = require('../models');
const withAuth = require ('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const productDb = await Product.findAll({
            include: [{ model: Category }, { model: User }],        
        });
        const userDb = await User.findAll({
            include: [{ model: Product}],
        });
      
        const users = userDb.map((user) => user.get({ plain:true }));

        const products = productDb.map((product) => product.get({ plain: true }));

        res.render('homepage', {
            users,
            products,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
      res.render('login');
})

module.exports = router;