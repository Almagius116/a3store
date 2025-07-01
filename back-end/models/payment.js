"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Order, { foreignKey: "orderId", as: "order" });
    }
  }
  Payment.init(
    {
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      paymentDate: DataTypes.DATE,
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      method: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM("success", "failed", "pending"),
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "Payments",
    }
  );
  return Payment;
};
