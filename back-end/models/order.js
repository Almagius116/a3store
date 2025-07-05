"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      Order.hasMany(models.OrderItem, {
        foreignKey: "orderId",
        as: "orderItem",
      });
      Order.hasMany(models.Payment, { foreignKey: "orderId", as: "payment" });
      Order.hasOne(models.Shipping, { foreignKey: "orderId", as: "shipping" });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM(
          "pending",
          "paid",
          "shipped",
          "completed",
          "canceled"
        ),
        defaultValue: "pending",
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "Orders",
    }
  );
  return Order;
};
