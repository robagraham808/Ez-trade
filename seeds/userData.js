const { User } = require('../models');

const userdata = [
  {
    name: 'Corey McKenzie',
    email: 'corey.mckenzie@gmail.com',
    phone: 200,
    password: 'password12345'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
