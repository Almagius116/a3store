"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shipping.belongsTo(models.Order, {
        foreignKey: "orderId",
        as: "order",
      });
    }
  }
  Shipping.init(
    {
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      address: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      postalCode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      shippingDate: DataTypes.DATE,
      trackingNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Shipping",
    }
  );
  return Shipping;
};
