const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
//const Tag = require("./Tag");
//const ProductTag = require("./ProductTag");

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

// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: "tag_id",
// });

module.exports = { User, Product, Category };
