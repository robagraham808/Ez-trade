const { Category } = require('../models');

const categorydata = [
  {
    catagory_name: 'Sports',
  },
  {
    catagory_name: 'Electronics',
  },
  {
    catagory_name: 'Clothes',
  },
  {
    catagory_name: 'Cars',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
