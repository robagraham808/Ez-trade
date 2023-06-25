const { Product } = require('../models');

const productdata = [
  {
    name: '2022 Kia Telluride',
    shortDescription: '2022 Kia Telluride',
    longDescription:
      '2022 Kia Telluride. Consumer Reports SUV of the year. Low miles. Great condition.',
    price: 48000.0,
    image: 'https://unsplash.com/photos/tzpA1l2_UQ8',
    category_id: 4,
    user_id: 1,
  },
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
