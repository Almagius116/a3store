"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Handphone",
          description: "Telepon genggam",
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
          description: "Headset dan Earphone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laptop",
          description: "Komputer jinjing untuk berbagai kebutuhan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kamera",
          description: "Kamera DSLR dan mirrorless",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tablet",
          description: "Tablet layar sentuh berbagai ukuran",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smartwatch",
          description: "Jam tangan pintar dengan fitur canggih",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Speaker",
          description: "Speaker Bluetooth dan kabel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Printer",
          description: "Printer inkjet dan laser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Router",
          description: "Router dan modem internet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monitor",
          description: "Layar monitor berbagai ukuran",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Keyboard",
          description: "Keyboard gaming dan kantor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mouse",
          description: "Mouse wireless dan kabel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Power Bank",
          description: "Pengisi daya portabel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charger",
          description: "Adaptor dan charger handphone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kipas Angin Elektrik",
          description: "Kipas angin listrik meja dan dinding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AC",
          description: "Air Conditioner berbagai merk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kulkas",
          description: "Kulkas 1 pintu dan 2 pintu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mesin Cuci",
          description: "Mesin cuci otomatis dan manual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Proyektor",
          description: "Proyektor untuk presentasi dan hiburan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hard Disk Eksternal",
          description: "Penyimpanan eksternal portabel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "USB Flashdisk",
          description: "Penyimpanan USB berbagai kapasitas",
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
