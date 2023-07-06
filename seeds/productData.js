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
  {
    product_name: 'Jordan 1',
    shortDescription: 'Nike Jordan 1 - black and gray',
    longDescription:
      'Nike Jordan 1 OG Shadow. Size 12.5. Black and gray.',
    price: 224.00,
    image: 'https://images.unsplash.com/photo-1631642777454-b43dc9fc2ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
    location_city: 'Oakland',
    location_state: 'California',
    category_id: 3,
    user_id: 1,
  },  
  {
    product_name: 'Tesla Model 3',
    shortDescription: 'Beautiful new Tesla Model 3 with low miles.',
    longDescription:
      'Model 3 is fully electric with 333 miles of estimated range, so you never need to visit a gas station again.',
    price: 44000.00,
    image: 'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
    location_city: 'Los Angeles',
    location_state: 'California',
    category_id: 4,
    user_id: 1,
  }
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
``