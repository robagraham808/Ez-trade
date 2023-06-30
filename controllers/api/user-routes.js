const router = require('express').Router();
const { User, Category, Product } = require('../../models');

router.get('/sign-up', async (req, res) => {
  try {
    res.render('signup');  
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/sign-up', async (req, res) => {
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
    console.log("444444444444444444444444444444444444444", req.body.email, req.body.password)
    const userDb = await User.findOne({ where: { email: req.body.email } });
    console.log("22222222222222222222222222222", userDb.id);
    if (!userDb) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log('33333333333333333333333333333333333333333');
    const validPassword = await userDb.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect email or password, please try again' });
    //   return;
    // }

    console.log("88888888888888888888888888888", userDb.id);
    req.session.save(() => {
      req.session.user_id = userDb.id;
      req.session.logged_in = true;
      
    });

    console.log(req.session.user_id);

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