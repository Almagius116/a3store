"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Provinces",
      [
        {
          provinceId: 1,
          provinceName: "NUSA TENGGARA BARAT (NTB)",
        },
        {
          provinceId: 2,
          provinceName: "MALUKU",
        },
        {
          provinceId: 3,
          provinceName: "KALIMANTAN SELATAN",
        },
        {
          provinceId: 4,
          provinceName: "KALIMANTAN TENGAH",
        },
        {
          provinceId: 5,
          provinceName: "JAWA BARAT",
        },
        {
          provinceId: 6,
          provinceName: "BENGKULU",
        },
        {
          provinceId: 7,
          provinceName: "KALIMANTAN TIMUR",
        },
        {
          provinceId: 8,
          provinceName: "KEPULAUAN RIAU",
        },
        {
          provinceId: 9,
          provinceName: "NANGGROE ACEH DARUSSALAM (NAD)",
        },
        {
          provinceId: 10,
          provinceName: "DKI JAKARTA",
        },
        {
          provinceId: 11,
          provinceName: "BANTEN",
        },
        {
          provinceId: 12,
          provinceName: "JAWA TENGAH",
        },
        {
          provinceId: 13,
          provinceName: "JAMBI",
        },
        {
          provinceId: 14,
          provinceName: "PAPUA",
        },
        {
          provinceId: 15,
          provinceName: "BALI",
        },
        {
          provinceId: 16,
          provinceName: "SUMATERA UTARA",
        },
        {
          provinceId: 17,
          provinceName: "GORONTALO",
        },
        {
          provinceId: 18,
          provinceName: "JAWA TIMUR",
        },
        {
          provinceId: 19,
          provinceName: "DI YOGYAKARTA",
        },
        {
          provinceId: 20,
          provinceName: "SULAWESI TENGGARA",
        },
        {
          provinceId: 21,
          provinceName: "NUSA TENGGARA TIMUR (NTT)",
        },
        {
          provinceId: 22,
          provinceName: "SULAWESI UTARA",
        },
        {
          provinceId: 23,
          provinceName: "SUMATERA BARAT",
        },
        {
          provinceId: 24,
          provinceName: "BANGKA BELITUNG",
        },
        {
          provinceId: 25,
          provinceName: "RIAU",
        },
        {
          provinceId: 26,
          provinceName: "SUMATERA SELATAN",
        },
        {
          provinceId: 27,
          provinceName: "SULAWESI TENGAH",
        },
        {
          provinceId: 28,
          provinceName: "KALIMANTAN BARAT",
        },
        {
          provinceId: 29,
          provinceName: "PAPUA BARAT",
        },
        {
          provinceId: 30,
          provinceName: "LAMPUNG",
        },
        {
          provinceId: 31,
          provinceName: "KALIMANTAN UTARA",
        },
        {
          provinceId: 32,
          provinceName: "MALUKU UTARA",
        },
        {
          provinceId: 33,
          provinceName: "SULAWESI SELATAN",
        },
        {
          provinceId: 34,
          provinceName: "SULAWESI BARAT",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Provinces", null, {});
  },
};
