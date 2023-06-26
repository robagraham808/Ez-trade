const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Category.hasMany(Product, {
//   foreignKey: 'category_id',
//   onDelete: 'CASCADE',
// });

Product.belongsTo(User, {
  foreignKey: 'user_id',
});

// User.hasMany(Product, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

module.exports = { User, Product, Category };
