"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shippings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      recipientName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cities",
          key: "cityId",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      shippingDate: {
        type: Sequelize.DATE,
      },
      totalWeight: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      shippingMethod: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "N/A",
      },
      status: {
        type: Sequelize.ENUM(
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
        type: Sequelize.STRING,
        defaultValue: "N/A",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Shippings");
  },
};
