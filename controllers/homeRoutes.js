const router = require('express').Router();
const withAuth = require('../utils/auth');

//Homepage
router.get('/', async (req, res) => {
    try {

      } catch (err) {
      res.status(500).json(err);
    }
  });

  