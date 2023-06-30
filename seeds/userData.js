const { User } = require('../models');

const userdata = [
  {
    first_name: 'Corey', 
    last_name: 'McKenzie',
    email: 'corey.mckenzie@gmail.com',
    phone: 200,
    password: 'password12345'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
