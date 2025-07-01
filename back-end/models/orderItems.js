"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItems.belongsTo(models.Order, {
        foreignKey: "orderId",
        as: "order",
      });
      OrderItems.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  OrderItems.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      productId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      unitPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
    },
    {
      sequelize,
      modelName: "OrderItems",
    }
  );
  return OrderItems;
};
