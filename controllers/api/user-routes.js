const router = require('express').Router();
const { User, Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
<<<<<<< HEAD
    const userDb = await User.findAll();

    res.status(200).json(userDb);

=======
    res.render('signup');
>>>>>>> ffb32f8 (Added Shopping Cart model and api route)
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
router.post('/signup', async (req, res) => {
=======
router.post('/sign-up', async (req, res) => {
>>>>>>> ffb32f8 (Added Shopping Cart model and api route)
  try {
    const userDb = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userDb.id;
      req.session.logged_in = true;
      res.status(200).json(userDb);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
<<<<<<< HEAD
    const userDb = await User.findOne({ where: { email: req.body.email } });
=======
    console.log(
      '444444444444444444444444444444444444444',
      req.body.email,
      req.body.password
    );
    const userDb = await User.findOne({ where: { email: req.body.email } });
    console.log('22222222222222222222222222222', userDb.id);
>>>>>>> ffb32f8 (Added Shopping Cart model and api route)
    if (!userDb) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userDb.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

<<<<<<< HEAD
    req.session.save(() => {
      req.session.user_id = userDb.id;
      req.session.logged_in = true;
      res.json({ user: userDb, message: 'You are now logged in!' });
    });

=======
    console.log('88888888888888888888888888888', userDb.id);
    req.session.save(() => {
      req.session.user_id = userDb.id;
      req.session.logged_in = true;
    });

    console.log(req.session.user_id);
>>>>>>> ffb32f8 (Added Shopping Cart model and api route)
  } catch (err) {
    ``;
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
