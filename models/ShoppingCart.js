const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ShoppingCart extends Model {}

ShoppingCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },


    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'product',
        key: 'id',
      },
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shoppingCart',
  }
);

module.exports = ShoppingCart;
