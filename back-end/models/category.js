"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: "categoryId",
        as: "products",
      });
    }
  }
  Category.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "Categories",
    }
  );
  return Category;
};
