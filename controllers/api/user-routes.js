const router = require('express').Router();
const { User, Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const userDb = await User.findAll();

    res.status(200).json(userDb);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/signup', async (req, res) => {
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
    const userDb = await User.findOne({ where: { email: req.body.email } });
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

    req.session.save(() => {
      req.session.user_id = userDb.id;
      req.session.logged_in = true;
      res.json({ user: userDb, message: 'You are now logged in!' });
    });

  } catch (err) {
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