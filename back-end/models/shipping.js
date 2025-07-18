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
      Shipping.belongsTo(models.City, {
        foreignKey: "cityId",
        as: "city",
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
      recipientName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      cityId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Cities",
          key: "cityId",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      postalCode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      shippingDate: DataTypes.DATE,
      totalWeight: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shippingMethod: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "N/A",
      },
      status: {
        type: DataTypes.ENUM(
          "pending",
          "shipped",
          "in-transit",
          "delivered",
          "failed"
        ),
        defaultValue: "pending",
      },
      trackingNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "N/A",
      },
    },
    {
      sequelize,
      modelName: "Shipping",
      tableName: "Shippings",
    }
  );
  return Shipping;
};
