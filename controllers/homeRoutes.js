const router = require ('express').Router();
const { Product, User, Category, ShoppingCart } = require('../models');
const withAuth = require ('../utils/auth');
const Sequelize = require('sequelize');

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

        let cartCount = 0;
  
        if (req.session.user_id) {
          const shoppingCartDB = await ShoppingCart.findAll({
            include: [{model: Product}, {model: User}],
            where: { buyer_id:req.session.user_id },
          })
        
          const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));
      
          cartCount = shoppingCart.length;
      
        }      

        //res.status(200).json(products);
        res.render('homepage', {
            products,
            logged_in: req.session.logged_in,
            buyer_id: req.session.user_id,
            cartCount
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Product }],
      });
  
      const user = userData.get({ plain: true });

      let cartCount = 0;
  
      if (req.session.user_id) {
        const shoppingCartDB = await ShoppingCart.findAll({
          include: [{model: Product}, {model: User}],
          where: { buyer_id:req.session.user_id },
        })
      
        const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));
    
        cartCount = shoppingCart.length;
    
      }
    
      const productDb = await Product.findAll({
        where: { user_id:req.session.user_id },
        include: [{model: User}],
      });

      const products = productDb.map((product) => product.get({ plain: true }));

      // res.status(200).json(products);
  
      res.render('profile', {
        products,
        user,
        logged_in: true,
        buyer_id: req.session.user_id,
        cartCount
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/product/:id', withAuth, async (req,res) => {
  try {
    const productDb = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: User }],        
  });

  const product = productDb.get({ plain:true });

  let cartCount = 0;
  
  if (req.session.user_id) {
    const shoppingCartDB = await ShoppingCart.findAll({
      include: [{model: Product}, {model: User}],
      where: { buyer_id:req.session.user_id },
    })
  
    const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));

    cartCount = shoppingCart.length;

  }

  res.render('productview', {
    ...product,
    logged_in: req.session.logged_in,
    buyer_id: req.session.user_id,
    cartCount
  });

  }catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/category/:category.id', async (req,res) => {
//   try {
//     const productDb = await Product.findByPk(req.params.category.id, {
//       include: [{ model: Category }, { model: User }],        
//   });

//   const product = productDb.get({ plain:true });

//   res.render('searchresults', {
//     ...product,
//     logged_in: req.session.logged_in
//   });

//   }catch (err) {
//     res.status(500).json(err);
//   }
// });

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


router.get('/searchresults/:id', async (req, res) => {
  try {
    const productDb = await Product.findAll({
      include: [{ model: Category }, { model: User }], 
      where: { category_id: req.params.id },       
  });


  const products = productDb.map((product) => product.get({ plain: true }));

  let cartCount = 0;
  
  if (req.session.user_id) {
    const shoppingCartDB = await ShoppingCart.findAll({
      include: [{model: Product}, {model: User}],
      where: { buyer_id:req.session.user_id },
    })
  
    const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));

    cartCount = shoppingCart.length;

  }

  //res.status(200).json(products)
  res.render('searchresults', {
      products,
      cartCount
  });

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/cart/', withAuth, async (req,res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);

  }
});

router.get('/cart/:buyer_id', withAuth, async (req,res) => {
  try {

    const shoppingCartDB = await ShoppingCart.findAll({
      include: [{model: Product}, {model: User}],
      where: { buyer_id:req.params.buyer_id },
    })

    const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));



    //res.status(200).json(shoppingCart);
    res.render('shoppingcart', {
      shoppingCart,
      buyer_id: req.session.user_id,
      cart_counter: shoppingCart.length,
    });


  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/cart/:buyer_id', withAuth, async (req,res) => {
//   try {

//     const shoppingCartDB = await ShoppingCart.findAll({
//       include: [{model: Product}, {model: User}],
//       where: { buyer_id:req.params.buyer_id },
//     })

//     const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));



//     //res.status(200).json(shoppingCart);
//     res.render('shoppingcart', {
//       shoppingCart,
//       buyer_id: req.session.user_id,
//       cart_counter: shoppingCart.length,
//     });


//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/cart/:buyer_id', withAuth, async (req,res) => {
//   try {
//     const shoppingCartDB = await ShoppingCart.findAll({
//       include: [{model: Product}, {model: User}],
//       where: { buyer_id:req.params.buyer_id },
//     })

//     const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));



//     res.status(200).json(shoppingCart);
//     // res.render('shoppingcart', {
//     //   shoppingCart,
//     //   buyer_id: req.session.user_id,
//     //   cart_counter: shoppingCart.length,
//     // });


//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/checkout/:buyer_id', withAuth, async (req,res) => {
  try {

    const shoppingCartDB = await ShoppingCart.findAll({
      include: [{model: Product}, {model: User}],
      where: { buyer_id:req.params.buyer_id },
    })

    const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));

    let cartCount = 0;
  
    if (req.session.user_id) {
      const shoppingCartDB = await ShoppingCart.findAll({
        include: [{model: Product}, {model: User}],
        where: { buyer_id:req.session.user_id },
      })
    
      const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));
  
      cartCount = shoppingCart.length;
  
    }  

     res.status(200).json(shoppingCart);
    // res.render('shoppingcart', {
    //   shoppingCart,
    //   buyer_id: req.session.user_id
    // });


  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post-product', withAuth, async (req,res) => {
  try {

    let cartCount = 0;
  
    if (req.session.user_id) {
      const shoppingCartDB = await ShoppingCart.findAll({
        include: [{model: Product}, {model: User}],
        where: { buyer_id:req.session.user_id },
      })
    
      const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));
  
      cartCount = shoppingCart.length;
  
    }  

    res.render('post-product', {
      cartCount
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/searchbar/:search', async (req,res) => {
  try {
    console.log('-----------------here')
    const searchTerm = req.params.search;

    console.log(req.params.search);

    const Op = Sequelize.Op;

    const matchingProducts = await Product.findAll({
      where: {
        [Op.or]: [
          { product_name: { [Op.like]: `%${searchTerm}%` } },
          { longDescription: { [Op.like]: `%${searchTerm}%` } },
        ],
      },
    });

    const products = matchingProducts.map((product) => product.get({ plain: true }));

    let cartCount = 0;
  
    if (req.session.user_id) {
      const shoppingCartDB = await ShoppingCart.findAll({
        include: [{model: Product}, {model: User}],
        where: { buyer_id:req.session.user_id },
      })
    
      const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));
  
      cartCount = shoppingCart.length;
  
    }
  
    //res.status(200).json(products)
    res.render('searchresults', {
        products,
        cartCount
    });
    } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;