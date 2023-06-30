const { Product } = require('../models');

const productdata = [
  {
    product_name: '2022 Kia Telluride',
    shortDescription: '2022 Kia Telluride',
    longDescription:
      '2022 Kia Telluride. Consumer Reports SUV of the year. Low miles. Great condition.',
    price: 48000.0,
    image: 'https://images.unsplash.com/photo-1651041940745-9f04e2f72a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    location_city: 'Dallas',
    location_state: 'Texas',
    category_id: 4,
    user_id: 1,
  },
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
