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
            products,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/product/:id', async (req,res) => {
  try {
    const productDb = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: User }],        
  });

  const product = productDb.get({ plain:true });

  res.render('productview', {
    ...product,
    logged_in: req.session.logged_in
  });

  }catch (err) {
    res.status(500).json(err);
  }
});

router.get('/category/:category.id', async (req,res) => {
  try {
    const productDb = await Product.findByPk(req.params.category.id, {
      include: [{ model: Category }, { model: User }],        
  });

  const product = productDb.get({ plain:true });

  res.render('searchresults', {
    ...product,
    logged_in: req.session.logged_in
  });

  }catch (err) {
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

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');  
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;