const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const ShoppingCart = require('./ShoppingCart');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

ShoppingCart.belongsTo(User, { 
  foreignKey: 'buyer_id', 
  onDelete: 'CASCADE' 
});

User.hasMany(ShoppingCart, {
  foreignKey: 'buyer_id', 
  onDelete: 'CASCADE'
});

Product.hasMany(ShoppingCart, { 
  foreignKey: 'product_id', 
  onDelete: 'CASCADE' 
});

ShoppingCart.belongsTo(Product, {
  foreignKey: 'product_id', 
  onDelete: 'CASCADE'
});

module.exports = { User, Product, Category, ShoppingCart };
