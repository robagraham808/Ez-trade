const { Category } = require('../models');

const categorydata = [
  {
    catagory_name: 'Electronics',
  },
  {
    catagory_name: 'Books',
  },
  {
    catagory_name: 'Gifts',
  },
  {
    catagory_name: 'Fashion',
  },
   {
    catagory_name: 'Toys/Games',
  },
   {
    catagory_name: 'Home Goods',
  },
   {
    catagory_name: 'Sports Gear',
  },
   {
    catagory_name: 'Shoes',
  },
   {
    catagory_name: 'Automotive',
  },
   {
    catagory_name: 'Hardware / Tools',
  },
   {
    catagory_name: 'Misc',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
