"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          categoryId: 11,
          name: "Sharp PowerLite",
          description: "Sharp PowerLite",
          price: 3223287,
          stock: 1,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/monitor.jpeg?updatedAt=1752125362403",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 20,
          name: "LG Z200",
          description: "LG Z200",
          price: 5391743,
          stock: 3,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/proyektor.jpeg?updatedAt=1752125357817",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          name: "Canon EOS 1500D",
          description: "Kamera DSLR",
          price: 3899000,
          stock: 15,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/Canon%20EOS%201500D.png?updatedAt=1752125364675",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          name: "Acer ProMax",
          description: "Acer ProMax",
          price: 6893794,
          stock: 18,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/Acer%20ProMax.jpg?updatedAt=1752125363451",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 11,
          name: "Philips Edge12",
          description: "Philips Edge12",
          price: 5062629,
          stock: 10,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/monitor.jpeg?updatedAt=1752125362403",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          name: "Samsung Galaxy A54",
          description: "Smartphone Samsung 5G dengan kamera hebat",
          price: 4499000,
          stock: 7,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/hp.jpeg?updatedAt=1752125362749",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          name: "Sony WH-1000XM4",
          description: "Headset noise cancelling dari Sony",
          price: 3999000,
          stock: 4,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/headset.jpeg?updatedAt=1752125362507",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 5,
          name: "Canon EOS M50",
          description: "Kamera mirrorless untuk pemula dan profesional",
          price: 8499000,
          stock: 6,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/Canon%20EOS%201500D.png?updatedAt=1752125364675",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 6,
          name: "iPad Air 5",
          description: "Tablet dengan chip M1 dan layar besar",
          price: 8999000,
          stock: 10,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/tablet.jpeg?updatedAt=1752125362269",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 7,
          name: "Apple Watch Series 8",
          description: "Smartwatch canggih dengan sensor kesehatan",
          price: 6999000,
          stock: 5,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/smartwatch.png?updatedAt=1752125362546",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 8,
          name: "JBL Flip 6",
          description: "Speaker Bluetooth tahan air dan bertenaga",
          price: 1999000,
          stock: 12,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/speaker.jpg?updatedAt=1752125362798",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 9,
          name: "Canon PIXMA G2020",
          description: "Printer dengan sistem tinta isi ulang",
          price: 1750000,
          stock: 8,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/printer.jpeg?updatedAt=1752125362298",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          name: "Samsung Crystal UHD 43",
          description: "TV 4K dengan tampilan tajam dan jernih",
          price: 3799000,
          stock: 4,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/tv.jpeg?updatedAt=1752125362357",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          name: "Realme C55",
          description: "Smartphone murah dengan fitur lengkap",
          price: 2100000,
          stock: 14,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/hp.jpeg?updatedAt=1752125362749",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 12,
          name: "Logitech K380",
          description: "Keyboard wireless compact untuk laptop/tablet",
          price: 650000,
          stock: 20,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/keyboard.png?updatedAt=1752125358809",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 13,
          name: "Razer Viper Mini",
          description: "Mouse gaming ringan dan cepat",
          price: 450000,
          stock: 13,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/mouse.jpg?updatedAt=1752125357605",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 14,
          name: "Anker PowerCore 10000",
          description: "Power bank dengan kapasitas besar dan compact",
          price: 399000,
          stock: 15,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/powerbank.jpg?updatedAt=1752125358255",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 15,
          name: "Charger Anker 20W",
          description: "Charger cepat untuk iPhone dan Android",
          price: 199000,
          stock: 25,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/charger.jpeg?updatedAt=1752125358073",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 16,
          name: "Kipas Angin Cosmos 16-XDC",
          description: "Kipas angin listrik hemat energi",
          price: 325000,
          stock: 11,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/kipas%20angin.jpg?updatedAt=1752125357199",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 17,
          name: "AC Panasonic 1PK",
          description: "Air Conditioner hemat listrik",
          price: 3100000,
          stock: 6,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/ac.jpg?updatedAt=1752125358215",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 18,
          name: "Kulkas Sharp 2 Pintu",
          description: "Kulkas hemat listrik dan muat banyak",
          price: 3250000,
          stock: 5,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/kulkas.jpeg?updatedAt=1752125357506",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 19,
          name: "Polytron Mesin Cuci",
          description: "Mesin cuci top loading hemat air",
          price: 2890000,
          stock: 4,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/kulkas.jpeg?updatedAt=1752125357506",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 20,
          name: "Epson Projector EB-E01",
          description: "Proyektor untuk presentasi dengan resolusi tinggi",
          price: 4200000,
          stock: 3,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/proyektor.jpeg?updatedAt=1752125357817",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 21,
          name: "WD Elements 1TB",
          description: "Hard disk eksternal dengan kapasitas besar",
          price: 765000,
          stock: 9,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/harddiskeksternal.jpeg?updatedAt=1752125357464",
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 22,
          name: "SanDisk 64GB USB",
          description: "Flashdisk USB 3.0 berkecepatan tinggi",
          price: 110000,
          stock: 18,
          images: [
            "https://ik.imagekit.io/a3store/fotodummycategory/flashdisk.jpg?updatedAt=1752125338578",
          ],
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
