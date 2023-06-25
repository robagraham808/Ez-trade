const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedCategory = require('./categoryData');
const seedProduct = require('./productData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedProduct();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedCategory();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
