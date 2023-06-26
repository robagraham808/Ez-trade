const { User } = require('../models');

const userdata = [
  {
    name: 'Corey McKenzie',
    email: 'corey.mckenzie@gmail.com',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
