const router = require('express').Router();
const { User, Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

router.post('/', async (req, res) => {
  try {
    const usersDb = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = usersDb.id;
      req.session.logged_in = true;

      res.status(200).json(usersDb);
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
