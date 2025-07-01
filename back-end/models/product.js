"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      Product.hasMany(models.Review, {
        foreignKey: "productId",
        as: "reviews",
      });
      Product.hasMany(models.OrderItems, {
        foreignKey: "productId",
        as: "orderItems",
      });
    }
  }
  Product.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      stock: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      images: DataTypes.ARRAY(DataTypes.TEXT),
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "Products",
    }
  );
  return Product;
};
