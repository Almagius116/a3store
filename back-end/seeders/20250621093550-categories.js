"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Handphone",
          description: "Handphone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TV",
          description: "Televisi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Headset",
          description: "Headset",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
