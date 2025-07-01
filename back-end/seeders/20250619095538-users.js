"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("password123", 10);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "admin_user",
          email: "admin@example.com",
          password: hashedPassword,
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "customer_1",
          email: "customer1@example.com",
          password: hashedPassword,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "customer_2",
          email: "customer2@example.com",
          password: hashedPassword,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
