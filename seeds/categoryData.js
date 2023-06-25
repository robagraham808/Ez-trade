const { Category } = require('../models');

const categorydata = [
  {
    name: 'Sports',
  },
  {
    name: 'Electronics',
  },
  {
    name: 'Clothes',
  },
  {
    name: 'Cars',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
