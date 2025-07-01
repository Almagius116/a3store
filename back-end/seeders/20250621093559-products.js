"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          categoryId: 2,
          name: "TV LG",
          description: "TV LG",
          price: 2000000,
          stock: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          name: "HP Samsung",
          description: "HP Samsung",
          price: 3000000,
          stock: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          name: "TV SHARP",
          description: "TV SHARP",
          price: 1890000,
          stock: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          name: "Headset",
          description: "Headset",
          price: 38000,
          stock: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
