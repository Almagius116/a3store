"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Review.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  Review.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "Reviews",
    }
  );
  return Review;
};
