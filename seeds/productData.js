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
    category_id: 9,
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
    category_id: 8,
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
    category_id: 9,
    user_id: 1,
  },
    {
    product_name: 'Honda Accord',
    shortDescription: '2012 Grey Honda Accord. 120,000 miles',
    longDescription:
      'This is a 2012 Honda Accord with 120,000 miles on it. No accidents and little to no serious issues so far. It still runs great and gets 38 mpg Highway.',
    price: 16000.00,
    image: 'https://source.unsplash.com/f_aSVHS8kjY',
    location_city: 'Seattle',
    location_state: 'Washington',
    category_id: 9,
    user_id: 1,
  },
  {
    product_name: 'Chevy Silverado',
    shortDescription: '2018 Chevy Silverado with 50,000 miles',
    longDescription:
      'This is a 2018 Chevy Silverado. No accidents and little to no serious issues so far.',
    price: 42000.00,
    image: 'https://source.unsplash.com/ZFSlpfAjxQw',
    location_city: 'Miami',
    location_state: 'Florida',
    category_id: 9,
    user_id: 1,
  },
   {
    product_name: 'Ford Focus',
    shortDescription: '2013 Ford Focus with 75,000 miles',
    longDescription:
      'This is a 2013 ford focus. It has been in one accident but not serious. No body damage and 75,000 miles with no serious maintainence issues so far.',
    price: 14000.00,
    image: 'https://source.unsplash.com/YynJ51xAquw',
    location_city: 'Denver',
    location_state: 'Colorado',
    category_id: 9,
    user_id: 1,
  },
  {
    product_name: 'Dodge Charger',
    shortDescription: '2015 Dodge Charger with 90,000 miles',
    longDescription:
      'This is a 2015 Dodge Charger. I have put lots of custom work into this. It has no body damage and is in great condition.',
    price: 35000.00,
    image: 'https://source.unsplash.com/NMGKAOAv-o8',
    location_city: 'Detroit',
    location_state: 'Michigan',
    category_id: 9,
    user_id: 1,
  },
    {
    product_name: 'Air Force ones',
    shortDescription: 'Nike Air Force ones',
    longDescription:
      'These are Nike Air Force Ones. They are moderately used but have been cleaned very well.',
    price: 45.00,
    image: 'https://source.unsplash.com/x5aavOm7PFc',
    location_city: 'San Diego',
    location_state: 'California',
    category_id: 8,
    user_id: 1,
  },
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;
