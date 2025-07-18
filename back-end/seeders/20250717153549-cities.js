"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          cityId: 1,
          cityName: "MATARAM",
          provinceId: 1,
        },
        {
          cityId: 2,
          cityName: "BIMA",
          provinceId: 1,
        },
        {
          cityId: 3,
          cityName: "DOMPU",
          provinceId: 1,
        },
        {
          cityId: 4,
          cityName: "LOMBOK TENGAH",
          provinceId: 1,
        },
        {
          cityId: 5,
          cityName: "LOMBOK TIMUR",
          provinceId: 1,
        },
        {
          cityId: 7,
          cityName: "SUMBAWA",
          provinceId: 1,
        },
        {
          cityId: 8,
          cityName: "LOMBOK BARAT",
          provinceId: 1,
        },
        {
          cityId: 9,
          cityName: "LOMBOK UTARA",
          provinceId: 1,
        },
        {
          cityId: 10,
          cityName: "SUMBAWA BARAT",
          provinceId: 1,
        },
        {
          cityId: 11,
          cityName: "AMBON",
          provinceId: 2,
        },
        {
          cityId: 12,
          cityName: "MALUKU TENGAH",
          provinceId: 2,
        },
        {
          cityId: 14,
          cityName: "MALUKU TENGGARA",
          provinceId: 2,
        },
        {
          cityId: 15,
          cityName: "TUAL",
          provinceId: 2,
        },
        {
          cityId: 16,
          cityName: "BURU",
          provinceId: 2,
        },
        {
          cityId: 17,
          cityName: "BURU SELATAN",
          provinceId: 2,
        },
        {
          cityId: 19,
          cityName: "KEPULAUAN ARU",
          provinceId: 2,
        },
        {
          cityId: 21,
          cityName: "SERAM BAGIAN BARAT",
          provinceId: 2,
        },
        {
          cityId: 23,
          cityName: "SERAM BAGIAN TIMUR",
          provinceId: 2,
        },
        {
          cityId: 24,
          cityName: "MALUKU BARAT DAYA",
          provinceId: 2,
        },
        {
          cityId: 25,
          cityName: "MALUKU TENGGARA BARAT",
          provinceId: 2,
        },
        {
          cityId: 29,
          cityName: "BANJARMASIN",
          provinceId: 3,
        },
        {
          cityId: 30,
          cityName: "HULU SUNGAI TENGAH",
          provinceId: 3,
        },
        {
          cityId: 32,
          cityName: "HULU SUNGAI SELATAN",
          provinceId: 3,
        },
        {
          cityId: 34,
          cityName: "KOTABARU",
          provinceId: 3,
        },
        {
          cityId: 35,
          cityName: "TABALONG",
          provinceId: 3,
        },
        {
          cityId: 36,
          cityName: "BANJARBARU",
          provinceId: 3,
        },
        {
          cityId: 38,
          cityName: "HULU SUNGAI UTARA",
          provinceId: 3,
        },
        {
          cityId: 39,
          cityName: "BARITO KUALA",
          provinceId: 3,
        },
        {
          cityId: 40,
          cityName: "BANJAR",
          provinceId: 3,
        },
        {
          cityId: 42,
          cityName: "TANAH LAUT",
          provinceId: 3,
        },
        {
          cityId: 44,
          cityName: "TAPIN",
          provinceId: 3,
        },
        {
          cityId: 53,
          cityName: "BALANGAN",
          provinceId: 3,
        },
        {
          cityId: 54,
          cityName: "TANAH BUMBU",
          provinceId: 3,
        },
        {
          cityId: 46,
          cityName: "BARITO UTARA",
          provinceId: 4,
        },
        {
          cityId: 48,
          cityName: "BARITO TIMUR",
          provinceId: 4,
        },
        {
          cityId: 50,
          cityName: "MURUNG RAYA",
          provinceId: 4,
        },
        {
          cityId: 52,
          cityName: "BARITO SELATAN",
          provinceId: 4,
        },
        {
          cityId: 456,
          cityName: "PALANGKA RAYA",
          provinceId: 4,
        },
        {
          cityId: 458,
          cityName: "KATINGAN",
          provinceId: 4,
        },
        {
          cityId: 460,
          cityName: "KAPUAS",
          provinceId: 4,
        },
        {
          cityId: 462,
          cityName: "GUNUNG MAS",
          provinceId: 4,
        },
        {
          cityId: 464,
          cityName: "SERUYAN",
          provinceId: 4,
        },
        {
          cityId: 466,
          cityName: "KOTAWARINGIN BARAT",
          provinceId: 4,
        },
        {
          cityId: 468,
          cityName: "KOTAWARINGIN TIMUR",
          provinceId: 4,
        },
        {
          cityId: 470,
          cityName: "LAMANDAU",
          provinceId: 4,
        },
        {
          cityId: 471,
          cityName: "PULANG PISAU",
          provinceId: 4,
        },
        {
          cityId: 472,
          cityName: "SUKAMARA",
          provinceId: 4,
        },
        {
          cityId: 55,
          cityName: "BANDUNG",
          provinceId: 5,
        },
        {
          cityId: 56,
          cityName: "CIMAHI",
          provinceId: 5,
        },
        {
          cityId: 57,
          cityName: "SUMEDANG",
          provinceId: 5,
        },
        {
          cityId: 59,
          cityName: "GARUT",
          provinceId: 5,
        },
        {
          cityId: 60,
          cityName: "BANDUNG BARAT",
          provinceId: 5,
        },
        {
          cityId: 62,
          cityName: "CIANJUR",
          provinceId: 5,
        },
        {
          cityId: 63,
          cityName: "BEKASI",
          provinceId: 5,
        },
        {
          cityId: 77,
          cityName: "BOGOR",
          provinceId: 5,
        },
        {
          cityId: 129,
          cityName: "CIREBON",
          provinceId: 5,
        },
        {
          cityId: 131,
          cityName: "INDRAMAYU",
          provinceId: 5,
        },
        {
          cityId: 132,
          cityName: "KUNINGAN",
          provinceId: 5,
        },
        {
          cityId: 133,
          cityName: "MAJALENGKA",
          provinceId: 5,
        },
        {
          cityId: 199,
          cityName: "DEPOK",
          provinceId: 5,
        },
        {
          cityId: 329,
          cityName: "KARAWANG",
          provinceId: 5,
        },
        {
          cityId: 532,
          cityName: "PURWAKARTA",
          provinceId: 5,
        },
        {
          cityId: 533,
          cityName: "SUBANG",
          provinceId: 5,
        },
        {
          cityId: 538,
          cityName: "SUKABUMI",
          provinceId: 5,
        },
        {
          cityId: 632,
          cityName: "TASIKMALAYA",
          provinceId: 5,
        },
        {
          cityId: 633,
          cityName: "BANJAR",
          provinceId: 5,
        },
        {
          cityId: 634,
          cityName: "CIAMIS",
          provinceId: 5,
        },
        {
          cityId: 635,
          cityName: "PANGANDARAN",
          provinceId: 5,
        },
        {
          cityId: 64,
          cityName: "BENGKULU",
          provinceId: 6,
        },
        {
          cityId: 65,
          cityName: "BENGKULU UTARA",
          provinceId: 6,
        },
        {
          cityId: 66,
          cityName: "BENGKULU TENGAH",
          provinceId: 6,
        },
        {
          cityId: 67,
          cityName: "REJANG LEBONG",
          provinceId: 6,
        },
        {
          cityId: 68,
          cityName: "BENGKULU SELATAN",
          provinceId: 6,
        },
        {
          cityId: 69,
          cityName: "KAUR",
          provinceId: 6,
        },
        {
          cityId: 70,
          cityName: "KEPAHIANG",
          provinceId: 6,
        },
        {
          cityId: 71,
          cityName: "LEBONG",
          provinceId: 6,
        },
        {
          cityId: 73,
          cityName: "MUKO MUKO",
          provinceId: 6,
        },
        {
          cityId: 76,
          cityName: "SELUMA",
          provinceId: 6,
        },
        // 7
        {
          cityId: 78,
          cityName: "BALIKPAPAN",
          provinceId: 7,
        },
        {
          cityId: 79,
          cityName: "KUTAI KARTANEGARA",
          provinceId: 7,
        },
        {
          cityId: 80,
          cityName: "PASER",
          provinceId: 7,
        },
        {
          cityId: 81,
          cityName: "BERAU",
          provinceId: 7,
        },
        {
          cityId: 83,
          cityName: "PENAJAM PASER UTARA",
          provinceId: 7,
        },
        {
          cityId: 84,
          cityName: "BONTANG",
          provinceId: 7,
        },
        {
          cityId: 86,
          cityName: "KUTAI TIMUR",
          provinceId: 7,
        },
        {
          cityId: 534,
          cityName: "SAMARINDA",
          provinceId: 7,
        },
        {
          cityId: 536,
          cityName: "KUTAI BARAT",
          provinceId: 7,
        },
        {
          cityId: 537,
          cityName: "MAHAKAM ULU",
          provinceId: 7,
        },
        // 7
        // 8
        {
          cityId: 90,
          cityName: "BATAM",
          provinceId: 8,
        },
        {
          cityId: 92,
          cityName: "LINGGA",
          provinceId: 8,
        },
        {
          cityId: 94,
          cityName: "NATUNA",
          provinceId: 8,
        },
        {
          cityId: 95,
          cityName: "KEPULAUAN ANAMBAS",
          provinceId: 8,
        },
        {
          cityId: 96,
          cityName: "KARIMUN",
          provinceId: 8,
        },
        {
          cityId: 619,
          cityName: "TANJUNG PINANG",
          provinceId: 8,
        },
        {
          cityId: 624,
          cityName: "BINTAN",
          provinceId: 8,
        },
        // 8
        // 9
        {
          cityId: 97,
          cityName: "BANDA ACEH",
          provinceId: 9,
        },
        {
          cityId: 98,
          cityName: "LANGSA",
          provinceId: 9,
        },
        {
          cityId: 100,
          cityName: "LHOKSEUMAWE",
          provinceId: 9,
        },
        {
          cityId: 101,
          cityName: "ACEH BESAR",
          provinceId: 9,
        },
        {
          cityId: 102,
          cityName: "BIREUEN",
          provinceId: 9,
        },
        {
          cityId: 104,
          cityName: "ACEH TENGGARA",
          provinceId: 9,
        },
        {
          cityId: 106,
          cityName: "ACEH BARAT",
          provinceId: 9,
        },
        {
          cityId: 107,
          cityName: "PIDIE",
          provinceId: 9,
        },
        {
          cityId: 109,
          cityName: "ACEH TENGAH",
          provinceId: 9,
        },
        {
          cityId: 110,
          cityName: "ACEH SELATAN",
          provinceId: 9,
        },
        {
          cityId: 111,
          cityName: "SABANG",
          provinceId: 9,
        },
        {
          cityId: 112,
          cityName: "ACEH BARAT DAYA",
          provinceId: 9,
        },
        {
          cityId: 113,
          cityName: "ACEH JAYA",
          provinceId: 9,
        },
        {
          cityId: 114,
          cityName: "ACEH SINGKIL",
          provinceId: 9,
        },
        {
          cityId: 116,
          cityName: "ACEH TAMIANG",
          provinceId: 9,
        },
        {
          cityId: 117,
          cityName: "ACEH TIMUR",
          provinceId: 9,
        },
        {
          cityId: 118,
          cityName: "ACEH UTARA",
          provinceId: 9,
        },
        {
          cityId: 120,
          cityName: "BENER MERIAH",
          provinceId: 9,
        },
        {
          cityId: 122,
          cityName: "GAYO LUES",
          provinceId: 9,
        },
        {
          cityId: 124,
          cityName: "NAGAN RAYA",
          provinceId: 9,
        },
        {
          cityId: 125,
          cityName: "PIDIE JAYA",
          provinceId: 9,
        },
        {
          cityId: 127,
          cityName: "SIMEULUE",
          provinceId: 9,
        },
        {
          cityId: 128,
          cityName: "SUBULUSSALAM",
          provinceId: 9,
        },
        // 9
        // 10
        {
          cityId: 135,
          cityName: "JAKARTA BARAT",
          provinceId: 10,
        },
        {
          cityId: 136,
          cityName: "JAKARTA SELATAN",
          provinceId: 10,
        },
        {
          cityId: 137,
          cityName: "JAKARTA PUSAT",
          provinceId: 10,
        },
        {
          cityId: 138,
          cityName: "JAKARTA UTARA",
          provinceId: 10,
        },
        {
          cityId: 139,
          cityName: "JAKARTA TIMUR",
          provinceId: 10,
        },
        {
          cityId: 141,
          cityName: "KEPULAUAN SERIBU",
          provinceId: 10,
        },
        // 10
        // 11
        {
          cityId: 143,
          cityName: "CILEGON",
          provinceId: 11,
        },
        {
          cityId: 144,
          cityName: "PANDEGLANG",
          provinceId: 11,
        },
        {
          cityId: 147,
          cityName: "LEBAK",
          provinceId: 11,
        },
        {
          cityId: 148,
          cityName: "SERANG",
          provinceId: 11,
        },
        {
          cityId: 592,
          cityName: "TANGERANG",
          provinceId: 11,
        },
        {
          cityId: 594,
          cityName: "TANGERANG SELATAN",
          provinceId: 11,
        },
        // 11
        // 12
        {
          cityId: 149,
          cityName: "CILACAP",
          provinceId: 12,
        },
        {
          cityId: 383,
          cityName: "MAGELANG",
          provinceId: 12,
        },
        {
          cityId: 384,
          cityName: "KEBUMEN",
          provinceId: 12,
        },
        {
          cityId: 385,
          cityName: "WONOSOBO",
          provinceId: 12,
        },
        {
          cityId: 386,
          cityName: "PURWOREJO",
          provinceId: 12,
        },
        {
          cityId: 387,
          cityName: "TEMANGGUNG",
          provinceId: 12,
        },
        {
          cityId: 539,
          cityName: "SURAKARTA",
          provinceId: 12,
        },
        {
          cityId: 540,
          cityName: "BOYOLALI",
          provinceId: 12,
        },
        {
          cityId: 541,
          cityName: "KARANGANYAR",
          provinceId: 12,
        },
        {
          cityId: 542,
          cityName: "KLATEN",
          provinceId: 12,
        },
        {
          cityId: 543,
          cityName: "SRAGEN",
          provinceId: 12,
        },
        {
          cityId: 544,
          cityName: "SUKOHARJO",
          provinceId: 12,
        },
        {
          cityId: 545,
          cityName: "WONOGIRI",
          provinceId: 12,
        },
        {
          cityId: 560,
          cityName: "SEMARANG",
          provinceId: 12,
        },
        {
          cityId: 561,
          cityName: "JEPARA",
          provinceId: 12,
        },
        {
          cityId: 562,
          cityName: "KUDUS",
          provinceId: 12,
        },
        {
          cityId: 563,
          cityName: "PEKALONGAN",
          provinceId: 12,
        },
        {
          cityId: 564,
          cityName: "BATANG",
          provinceId: 12,
        },
        {
          cityId: 565,
          cityName: "BLORA",
          provinceId: 12,
        },
        {
          cityId: 567,
          cityName: "DEMAK",
          provinceId: 12,
        },
        {
          cityId: 568,
          cityName: "KENDAL",
          provinceId: 12,
        },
        {
          cityId: 569,
          cityName: "PATI",
          provinceId: 12,
        },
        {
          cityId: 570,
          cityName: "PEMALANG",
          provinceId: 12,
        },
        {
          cityId: 571,
          cityName: "GROBOGAN",
          provinceId: 12,
        },
        {
          cityId: 572,
          cityName: "REMBANG",
          provinceId: 12,
        },
        {
          cityId: 573,
          cityName: "SALATIGA",
          provinceId: 12,
        },
        {
          cityId: 575,
          cityName: "PURBALINGGA",
          provinceId: 12,
        },
        {
          cityId: 576,
          cityName: "BANJARNEGARA",
          provinceId: 12,
        },
        {
          cityId: 588,
          cityName: "TEGAL",
          provinceId: 12,
        },
        {
          cityId: 589,
          cityName: "BREBES",
          provinceId: 12,
        },
        {
          cityId: 591,
          cityName: "BANYUMAS",
          provinceId: 12,
        },
        // 12
        // 13
        {
          cityId: 150,
          cityName: "JAMBI",
          provinceId: 13,
        },
        {
          cityId: 152,
          cityName: "TANJUNG JABUNG BARAT",
          provinceId: 13,
        },
        {
          cityId: 153,
          cityName: "MERANGIN",
          provinceId: 13,
        },
        {
          cityId: 154,
          cityName: "BATANG HARI",
          provinceId: 13,
        },
        {
          cityId: 156,
          cityName: "BUNGO",
          provinceId: 13,
        },
        {
          cityId: 157,
          cityName: "SUNGAIPENUH",
          provinceId: 13,
        },
        {
          cityId: 158,
          cityName: "KERINCI",
          provinceId: 13,
        },
        {
          cityId: 160,
          cityName: "MUARO JAMBI",
          provinceId: 13,
        },
        {
          cityId: 161,
          cityName: "SAROLANGUN",
          provinceId: 13,
        },
        {
          cityId: 163,
          cityName: "TANJUNG JABUNG TIMUR",
          provinceId: 13,
        },
        {
          cityId: 164,
          cityName: "TEBO",
          provinceId: 13,
        },
        // 13
        // 14
        {
          cityId: 165,
          cityName: "JAYAPURA",
          provinceId: 14,
        },
        {
          cityId: 166,
          cityName: "BIAK NUMFOR",
          provinceId: 14,
        },
        {
          cityId: 167,
          cityName: "MERAUKE",
          provinceId: 14,
        },
        {
          cityId: 168,
          cityName: "NABIRE",
          provinceId: 14,
        },
        {
          cityId: 169,
          cityName: "DOGIYAI",
          provinceId: 14,
        },
        {
          cityId: 171,
          cityName: "KEPULAUAN YAPEN",
          provinceId: 14,
        },
        {
          cityId: 172,
          cityName: "JAYAWIJAYA",
          provinceId: 14,
        },
        {
          cityId: 174,
          cityName: "LANNY JAYA",
          provinceId: 14,
        },
        {
          cityId: 175,
          cityName: "YALIMO",
          provinceId: 14,
        },
        {
          cityId: 176,
          cityName: "NDUGA",
          provinceId: 14,
        },
        {
          cityId: 177,
          cityName: "MAMBERAMO TENGAH",
          provinceId: 14,
        },
        {
          cityId: 178,
          cityName: "ASMAT",
          provinceId: 14,
        },
        {
          cityId: 180,
          cityName: "BOVEN DIGOEL",
          provinceId: 14,
        },
        {
          cityId: 181,
          cityName: "KEEROM",
          provinceId: 14,
        },
        {
          cityId: 183,
          cityName: "MAPPI",
          provinceId: 14,
        },
        {
          cityId: 184,
          cityName: "INTAN JAYA",
          provinceId: 14,
        },
        {
          cityId: 185,
          cityName: "PANIAI",
          provinceId: 14,
        },
        {
          cityId: 186,
          cityName: "DEIYAI",
          provinceId: 14,
        },
        {
          cityId: 187,
          cityName: "PEGUNUNGAN BINTANG",
          provinceId: 14,
        },
        {
          cityId: 188,
          cityName: "PUNCAK JAYA",
          provinceId: 14,
        },
        {
          cityId: 189,
          cityName: "PUNCAK",
          provinceId: 14,
        },
        {
          cityId: 190,
          cityName: "SARMI",
          provinceId: 14,
        },
        {
          cityId: 192,
          cityName: "SUPIORI",
          provinceId: 14,
        },
        {
          cityId: 193,
          cityName: "TOLIKARA",
          provinceId: 14,
        },
        {
          cityId: 195,
          cityName: "WAROPEN",
          provinceId: 14,
        },
        {
          cityId: 196,
          cityName: "YAHUKIMO",
          provinceId: 14,
        },
        {
          cityId: 198,
          cityName: "MAMBERAMO RAYA",
          provinceId: 14,
        },
        {
          cityId: 595,
          cityName: "MIMIKA",
          provinceId: 14,
        },
        // 14
        // 15
        {
          cityId: 201,
          cityName: "DENPASAR",
          provinceId: 15,
        },
        {
          cityId: 203,
          cityName: "KARANGASEM",
          provinceId: 15,
        },
        {
          cityId: 204,
          cityName: "BANGLI",
          provinceId: 15,
        },
        {
          cityId: 205,
          cityName: "GIANYAR",
          provinceId: 15,
        },
        {
          cityId: 206,
          cityName: "JEMBRANA",
          provinceId: 15,
        },
        {
          cityId: 208,
          cityName: "KLUNGKUNG",
          provinceId: 15,
        },
        {
          cityId: 210,
          cityName: "BULELENG",
          provinceId: 15,
        },
        {
          cityId: 211,
          cityName: "TABANAN",
          provinceId: 15,
        },
        {
          cityId: 212,
          cityName: "BADUNG",
          provinceId: 15,
        },
        // 15
        // 16
        {
          cityId: 218,
          cityName: "TOBA SAMOSIR",
          provinceId: 16,
        },
        {
          cityId: 219,
          cityName: "GUNUNGSITOLI",
          provinceId: 16,
        },
        {
          cityId: 220,
          cityName: "NIAS",
          provinceId: 16,
        },
        {
          cityId: 221,
          cityName: "NIAS BARAT",
          provinceId: 16,
        },
        {
          cityId: 222,
          cityName: "NIAS SELATAN",
          provinceId: 16,
        },
        {
          cityId: 223,
          cityName: "NIAS UTARA",
          provinceId: 16,
        },
        {
          cityId: 225,
          cityName: "SIBOLGA",
          provinceId: 16,
        },
        {
          cityId: 226,
          cityName: "TAPANULI TENGAH",
          provinceId: 16,
        },
        {
          cityId: 227,
          cityName: "PADANG SIDEMPUAN",
          provinceId: 16,
        },
        {
          cityId: 228,
          cityName: "TAPANULI SELATAN",
          provinceId: 16,
        },
        {
          cityId: 229,
          cityName: "TAPANULI UTARA",
          provinceId: 16,
        },
        {
          cityId: 231,
          cityName: "PADANG LAWAS UTARA",
          provinceId: 16,
        },
        {
          cityId: 239,
          cityName: "HUMBANG HASUNDUTAN",
          provinceId: 16,
        },
        {
          cityId: 240,
          cityName: "MANDAILING NATAL",
          provinceId: 16,
        },
        {
          cityId: 243,
          cityName: "PADANG LAWAS",
          provinceId: 16,
        },
        {
          cityId: 361,
          cityName: "MEDAN",
          provinceId: 16,
        },
        {
          cityId: 363,
          cityName: "ASAHAN",
          provinceId: 16,
        },
        {
          cityId: 364,
          cityName: "DAIRI",
          provinceId: 16,
        },
        {
          cityId: 365,
          cityName: "DELI SERDANG",
          provinceId: 16,
        },
        {
          cityId: 366,
          cityName: "BINJAI",
          provinceId: 16,
        },
        {
          cityId: 368,
          cityName: "SIMALUNGUN",
          provinceId: 16,
        },
        {
          cityId: 370,
          cityName: "LABUHANBATU UTARA",
          provinceId: 16,
        },
        {
          cityId: 371,
          cityName: "LABUHANBATU",
          provinceId: 16,
        },
        {
          cityId: 372,
          cityName: "LABUHANBATU SELATAN",
          provinceId: 16,
        },
        {
          cityId: 374,
          cityName: "KARO",
          provinceId: 16,
        },
        {
          cityId: 375,
          cityName: "LANGKAT",
          provinceId: 16,
        },
        {
          cityId: 376,
          cityName: "SERDANG BEDAGAI",
          provinceId: 16,
        },
        {
          cityId: 377,
          cityName: "TEBING TINGGI",
          provinceId: 16,
        },
        {
          cityId: 378,
          cityName: "BATU BARA",
          provinceId: 16,
        },
        {
          cityId: 379,
          cityName: "PAKPAK BHARAT",
          provinceId: 16,
        },
        {
          cityId: 380,
          cityName: "SAMOSIR",
          provinceId: 16,
        },
        {
          cityId: 381,
          cityName: "TANJUNG BALAI",
          provinceId: 16,
        },
        {
          cityId: 382,
          cityName: "PEMATANG SIANTAR",
          provinceId: 16,
        },
        // 16
        // 17
        {
          cityId: 251,
          cityName: "GORONTALO",
          provinceId: 17,
        },
        {
          cityId: 252,
          cityName: "GORONTALO UTARA",
          provinceId: 17,
        },
        {
          cityId: 253,
          cityName: "BOALEMO",
          provinceId: 17,
        },
        {
          cityId: 254,
          cityName: "BONE BOLANGO",
          provinceId: 17,
        },
        {
          cityId: 255,
          cityName: "POHUWATO",
          provinceId: 17,
        },
        // 17
        // 18
        {
          cityId: 256,
          cityName: "JEMBER",
          provinceId: 18,
        },
        {
          cityId: 257,
          cityName: "BANYUWANGI",
          provinceId: 18,
        },
        {
          cityId: 258,
          cityName: "BONDOWOSO",
          provinceId: 18,
        },
        {
          cityId: 289,
          cityName: "KEDIRI",
          provinceId: 18,
        },
        {
          cityId: 353,
          cityName: "MADIUN",
          provinceId: 18,
        },
        {
          cityId: 355,
          cityName: "MAGETAN",
          provinceId: 18,
        },
        {
          cityId: 357,
          cityName: "NGAWI",
          provinceId: 18,
        },
        {
          cityId: 359,
          cityName: "PACITAN",
          provinceId: 18,
        },
        {
          cityId: 360,
          cityName: "PONOROGO",
          provinceId: 18,
        },
        {
          cityId: 388,
          cityName: "MOJOKERTO",
          provinceId: 18,
        },
        {
          cityId: 389,
          cityName: "JOMBANG",
          provinceId: 18,
        },
        {
          cityId: 390,
          cityName: "NGANJUK",
          provinceId: 18,
        },
        {
          cityId: 391,
          cityName: "MALANG",
          provinceId: 18,
        },
        {
          cityId: 392,
          cityName: "BLITAR",
          provinceId: 18,
        },
        {
          cityId: 393,
          cityName: "BATU",
          provinceId: 18,
        },
        {
          cityId: 394,
          cityName: "PROBOLINGGO",
          provinceId: 18,
        },
        {
          cityId: 395,
          cityName: "LUMAJANG",
          provinceId: 18,
        },
        {
          cityId: 396,
          cityName: "SITUBONDO",
          provinceId: 18,
        },
        {
          cityId: 531,
          cityName: "PASURUAN",
          provinceId: 18,
        },
        {
          cityId: 566,
          cityName: "BOJONEGORO",
          provinceId: 18,
        },
        {
          cityId: 577,
          cityName: "SURABAYA",
          provinceId: 18,
        },
        {
          cityId: 578,
          cityName: "GRESIK",
          provinceId: 18,
        },
        {
          cityId: 579,
          cityName: "LAMONGAN",
          provinceId: 18,
        },
        {
          cityId: 580,
          cityName: "BANGKALAN",
          provinceId: 18,
        },
        {
          cityId: 581,
          cityName: "PAMEKASAN",
          provinceId: 18,
        },
        {
          cityId: 582,
          cityName: "SAMPANG",
          provinceId: 18,
        },
        {
          cityId: 583,
          cityName: "SIDOARJO",
          provinceId: 18,
        },
        {
          cityId: 584,
          cityName: "SUMENEP",
          provinceId: 18,
        },
        {
          cityId: 585,
          cityName: "TUBAN",
          provinceId: 18,
        },
        {
          cityId: 586,
          cityName: "TULUNGAGUNG",
          provinceId: 18,
        },
        {
          cityId: 587,
          cityName: "TRENGGALEK",
          provinceId: 18,
        },
        // 18
        // 19
        {
          cityId: 259,
          cityName: "YOGYAKARTA",
          provinceId: 19,
        },
        {
          cityId: 260,
          cityName: "BANTUL",
          provinceId: 19,
        },
        {
          cityId: 261,
          cityName: "SLEMAN",
          provinceId: 19,
        },
        {
          cityId: 262,
          cityName: "KULON PROGO",
          provinceId: 19,
        },
        {
          cityId: 263,
          cityName: "GUNUNG KIDUL",
          provinceId: 19,
        },
        // 19
        // 20
        {
          cityId: 264,
          cityName: "KENDARI",
          provinceId: 20,
        },
        {
          cityId: 267,
          cityName: "BAU-BAU",
          provinceId: 20,
        },
        {
          cityId: 268,
          cityName: "KOLAKA",
          provinceId: 20,
        },
        {
          cityId: 269,
          cityName: "KOLAKA TIMUR",
          provinceId: 20,
        },
        {
          cityId: 271,
          cityName: "BUTON UTARA",
          provinceId: 20,
        },
        {
          cityId: 272,
          cityName: "MUNA",
          provinceId: 20,
        },
        {
          cityId: 273,
          cityName: "MUNA BARAT",
          provinceId: 20,
        },
        {
          cityId: 276,
          cityName: "KONAWE",
          provinceId: 20,
        },
        {
          cityId: 277,
          cityName: "KONAWE UTARA",
          provinceId: 20,
        },
        {
          cityId: 280,
          cityName: "BOMBANA",
          provinceId: 20,
        },
        {
          cityId: 281,
          cityName: "BUTON",
          provinceId: 20,
        },
        {
          cityId: 282,
          cityName: "BUTON SELATAN",
          provinceId: 20,
        },
        {
          cityId: 283,
          cityName: "BUTON TENGAH",
          provinceId: 20,
        },
        {
          cityId: 285,
          cityName: "KOLAKA UTARA",
          provinceId: 20,
        },
        {
          cityId: 286,
          cityName: "KONAWE SELATAN",
          provinceId: 20,
        },
        {
          cityId: 287,
          cityName: "WAKATOBI",
          provinceId: 20,
        },
        {
          cityId: 288,
          cityName: "KONAWE KEPULAUAN",
          provinceId: 20,
        },
        // 20
        // 21
        {
          cityId: 290,
          cityName: "KUPANG",
          provinceId: 21,
        },
        {
          cityId: 292,
          cityName: "SUMBA TENGAH",
          provinceId: 21,
        },
        {
          cityId: 293,
          cityName: "BELU",
          provinceId: 21,
        },
        {
          cityId: 294,
          cityName: "MALAKA",
          provinceId: 21,
        },
        {
          cityId: 296,
          cityName: "ALOR",
          provinceId: 21,
        },
        {
          cityId: 297,
          cityName: "TIMOR TENGAH UTARA",
          provinceId: 21,
        },
        {
          cityId: 298,
          cityName: "FLORES TIMUR",
          provinceId: 21,
        },
        {
          cityId: 300,
          cityName: "SIKKA",
          provinceId: 21,
        },
        {
          cityId: 301,
          cityName: "MANGGARAI",
          provinceId: 21,
        },
        {
          cityId: 308,
          cityName: "TIMOR TENGAH SELATAN",
          provinceId: 21,
        },
        {
          cityId: 309,
          cityName: "ENDE",
          provinceId: 21,
        },
        {
          cityId: 310,
          cityName: "NGADA",
          provinceId: 21,
        },
        {
          cityId: 313,
          cityName: "SUMBA TIMUR",
          provinceId: 21,
        },
        {
          cityId: 314,
          cityName: "SUMBA BARAT",
          provinceId: 21,
        },
        {
          cityId: 318,
          cityName: "MANGGARAI BARAT",
          provinceId: 21,
        },
        {
          cityId: 319,
          cityName: "MANGGARAI TIMUR",
          provinceId: 21,
        },
        {
          cityId: 321,
          cityName: "NAGEKEO",
          provinceId: 21,
        },
        {
          cityId: 323,
          cityName: "ROTE NDAO",
          provinceId: 21,
        },
        {
          cityId: 325,
          cityName: "SUMBA BARAT DAYA",
          provinceId: 21,
        },
        {
          cityId: 326,
          cityName: "LEMBATA",
          provinceId: 21,
        },
        {
          cityId: 328,
          cityName: "SABU RAIJUA",
          provinceId: 21,
        },
        // 21
        // 22
        {
          cityId: 330,
          cityName: "MANADO",
          provinceId: 22,
        },
        {
          cityId: 331,
          cityName: "KOTAMOBAGU",
          provinceId: 22,
        },
        {
          cityId: 332,
          cityName: "BOLAANG MONGONDOW UTARA",
          provinceId: 22,
        },
        {
          cityId: 333,
          cityName: "BOLAANG MONGONDOW",
          provinceId: 22,
        },
        {
          cityId: 335,
          cityName: "BOLAANG MONGONDOW SELATAN",
          provinceId: 22,
        },
        {
          cityId: 336,
          cityName: "BOLAANG MONGONDOW TIMUR",
          provinceId: 22,
        },
        {
          cityId: 338,
          cityName: "KEPULAUAN SANGIHE",
          provinceId: 22,
        },
        {
          cityId: 339,
          cityName: "KEPULAUAN SIAU TAGULANDANG BIARO (SITARO)",
          provinceId: 22,
        },
        {
          cityId: 341,
          cityName: "MINAHASA",
          provinceId: 22,
        },
        {
          cityId: 342,
          cityName: "BITUNG",
          provinceId: 22,
        },
        {
          cityId: 347,
          cityName: "KEPULAUAN TALAUD",
          provinceId: 22,
        },
        {
          cityId: 348,
          cityName: "MINAHASA UTARA",
          provinceId: 22,
        },
        {
          cityId: 349,
          cityName: "MINAHASA SELATAN",
          provinceId: 22,
        },
        {
          cityId: 351,
          cityName: "MINAHASA TENGGARA",
          provinceId: 22,
        },
        {
          cityId: 352,
          cityName: "TOMOHON",
          provinceId: 22,
        },
        // 22
        // 23
        {
          cityId: 397,
          cityName: "PADANG",
          provinceId: 23,
        },
        {
          cityId: 399,
          cityName: "TANAH DATAR",
          provinceId: 23,
        },
        {
          cityId: 401,
          cityName: "BUKITTINGGI",
          provinceId: 23,
        },
        {
          cityId: 402,
          cityName: "PASAMAN",
          provinceId: 23,
        },
        {
          cityId: 404,
          cityName: "PESISIR SELATAN",
          provinceId: 23,
        },
        {
          cityId: 405,
          cityName: "PARIAMAN",
          provinceId: 23,
        },
        {
          cityId: 406,
          cityName: "PADANG PARIAMAN",
          provinceId: 23,
        },
        {
          cityId: 407,
          cityName: "LIMA PULUH KOTA",
          provinceId: 23,
        },
        {
          cityId: 408,
          cityName: "PAYAKUMBUH",
          provinceId: 23,
        },
        {
          cityId: 410,
          cityName: "SAWAH LUNTO",
          provinceId: 23,
        },
        {
          cityId: 411,
          cityName: "SOLOK",
          provinceId: 23,
        },
        {
          cityId: 412,
          cityName: "PADANG PANJANG",
          provinceId: 23,
        },
        {
          cityId: 413,
          cityName: "DHARMASRAYA",
          provinceId: 23,
        },
        {
          cityId: 416,
          cityName: "KEPULAUAN MENTAWAI",
          provinceId: 23,
        },
        {
          cityId: 419,
          cityName: "PASAMAN BARAT",
          provinceId: 23,
        },
        {
          cityId: 424,
          cityName: "SOLOK SELATAN",
          provinceId: 23,
        },
        {
          cityId: 426,
          cityName: "SIJUNJUNG",
          provinceId: 23,
        },
        {
          cityId: 427,
          cityName: "AGAM",
          provinceId: 23,
        },
        // 23
        // 24
        {
          cityId: 428,
          cityName: "PANGKAL PINANG",
          provinceId: 24,
        },
        {
          cityId: 429,
          cityName: "BANGKA",
          provinceId: 24,
        },
        {
          cityId: 430,
          cityName: "BANGKA BARAT",
          provinceId: 24,
        },
        {
          cityId: 431,
          cityName: "BANGKA TENGAH",
          provinceId: 24,
        },
        {
          cityId: 432,
          cityName: "BANGKA SELATAN",
          provinceId: 24,
        },
        {
          cityId: 596,
          cityName: "BELITUNG",
          provinceId: 24,
        },
        {
          cityId: 597,
          cityName: "BELITUNG TIMUR",
          provinceId: 24,
        },
        // 24
        // 25
        {
          cityId: 433,
          cityName: "PEKANBARU",
          provinceId: 25,
        },
        {
          cityId: 434,
          cityName: "DUMAI",
          provinceId: 25,
        },
        {
          cityId: 435,
          cityName: "KAMPAR",
          provinceId: 25,
        },
        {
          cityId: 436,
          cityName: "BENGKALIS",
          provinceId: 25,
        },
        {
          cityId: 438,
          cityName: "INDRAGIRI HULU",
          provinceId: 25,
        },
        {
          cityId: 439,
          cityName: "INDRAGIRI HILIR",
          provinceId: 25,
        },
        {
          cityId: 441,
          cityName: "ROKAN HILIR",
          provinceId: 25,
        },
        {
          cityId: 443,
          cityName: "KUANTAN SINGINGI",
          provinceId: 25,
        },
        {
          cityId: 444,
          cityName: "PELALAWAN",
          provinceId: 25,
        },
        {
          cityId: 447,
          cityName: "ROKAN HULU",
          provinceId: 25,
        },
        {
          cityId: 451,
          cityName: "SIAK",
          provinceId: 25,
        },
        {
          cityId: 454,
          cityName: "KEPULAUAN MERANTI",
          provinceId: 25,
        },
        // 25
        // 26
        {
          cityId: 473,
          cityName: "PALEMBANG",
          provinceId: 26,
        },
        {
          cityId: 475,
          cityName: "MUSI RAWAS",
          provinceId: 26,
        },
        {
          cityId: 476,
          cityName: "MUSI RAWAS UTARA",
          provinceId: 26,
        },
        {
          cityId: 479,
          cityName: "OGAN KOMERING ULU",
          provinceId: 26,
        },
        {
          cityId: 480,
          cityName: "OGAN KOMERING ILIR",
          provinceId: 26,
        },
        {
          cityId: 482,
          cityName: "LAHAT",
          provinceId: 26,
        },
        {
          cityId: 485,
          cityName: "MUARA ENIM",
          provinceId: 26,
        },
        {
          cityId: 486,
          cityName: "PENUKAL ABAB LEMATANG ILIR",
          provinceId: 26,
        },
        {
          cityId: 487,
          cityName: "PAGAR ALAM",
          provinceId: 26,
        },
        {
          cityId: 488,
          cityName: "PRABUMULIH",
          provinceId: 26,
        },
        {
          cityId: 489,
          cityName: "MUSI BANYUASIN",
          provinceId: 26,
        },
        {
          cityId: 491,
          cityName: "BANYUASIN",
          provinceId: 26,
        },
        {
          cityId: 492,
          cityName: "EMPAT LAWANG",
          provinceId: 26,
        },
        {
          cityId: 493,
          cityName: "OGAN ILIR",
          provinceId: 26,
        },
        {
          cityId: 494,
          cityName: "OGAN KOMERING ULU TIMUR",
          provinceId: 26,
        },
        {
          cityId: 495,
          cityName: "OGAN KOMERING ULU SELATAN",
          provinceId: 26,
        },
        {
          cityId: 496,
          cityName: "LUBUK LINGGAU",
          provinceId: 26,
        },
        // 26
        // 27
        {
          cityId: 497,
          cityName: "PALU",
          provinceId: 27,
        },
        {
          cityId: 498,
          cityName: "BANGGAI",
          provinceId: 27,
        },
        {
          cityId: 499,
          cityName: "POSO",
          provinceId: 27,
        },
        {
          cityId: 500,
          cityName: "TOLI-TOLI",
          provinceId: 27,
        },
        {
          cityId: 501,
          cityName: "BANGGAI LAUT",
          provinceId: 27,
        },
        {
          cityId: 502,
          cityName: "BANGGAI KEPULAUAN",
          provinceId: 27,
        },
        {
          cityId: 504,
          cityName: "BUOL",
          provinceId: 27,
        },
        {
          cityId: 505,
          cityName: "DONGGALA",
          provinceId: 27,
        },
        {
          cityId: 507,
          cityName: "SIGI",
          provinceId: 27,
        },
        {
          cityId: 509,
          cityName: "MOROWALI",
          provinceId: 27,
        },
        {
          cityId: 510,
          cityName: "MOROWALI UTARA",
          provinceId: 27,
        },
        {
          cityId: 511,
          cityName: "PARIGI MOUTONG",
          provinceId: 27,
        },
        {
          cityId: 512,
          cityName: "TOJO UNA-UNA",
          provinceId: 27,
        },
        // 27
        // 28
        {
          cityId: 513,
          cityName: "PONTIANAK",
          provinceId: 28,
        },
        {
          cityId: 514,
          cityName: "KETAPANG",
          provinceId: 28,
        },
        {
          cityId: 515,
          cityName: "SANGGAU",
          provinceId: 28,
        },
        {
          cityId: 516,
          cityName: "SINGKAWANG",
          provinceId: 28,
        },
        {
          cityId: 517,
          cityName: "SINTANG",
          provinceId: 28,
        },
        {
          cityId: 519,
          cityName: "KAPUAS HULU",
          provinceId: 28,
        },
        {
          cityId: 522,
          cityName: "BENGKAYANG",
          provinceId: 28,
        },
        {
          cityId: 523,
          cityName: "LANDAK",
          provinceId: 28,
        },
        {
          cityId: 524,
          cityName: "MELAWI",
          provinceId: 28,
        },
        {
          cityId: 526,
          cityName: "MEMPAWAH",
          provinceId: 28,
        },
        {
          cityId: 527,
          cityName: "KUBU RAYA",
          provinceId: 28,
        },
        {
          cityId: 528,
          cityName: "SAMBAS",
          provinceId: 28,
        },
        {
          cityId: 529,
          cityName: "SEKADAU",
          provinceId: 28,
        },
        {
          cityId: 530,
          cityName: "KAYONG UTARA",
          provinceId: 28,
        },
        // 28
        // 29
        {
          cityId: 546,
          cityName: "SORONG",
          provinceId: 29,
        },
        {
          cityId: 547,
          cityName: "TAMBRAUW",
          provinceId: 29,
        },
        {
          cityId: 548,
          cityName: "FAKFAK",
          provinceId: 29,
        },
        {
          cityId: 549,
          cityName: "KAIMANA",
          provinceId: 29,
        },
        {
          cityId: 551,
          cityName: "RAJA AMPAT",
          provinceId: 29,
        },
        {
          cityId: 552,
          cityName: "SORONG SELATAN",
          provinceId: 29,
        },
        {
          cityId: 553,
          cityName: "MAYBRAT",
          provinceId: 29,
        },
        {
          cityId: 554,
          cityName: "TELUK BINTUNI",
          provinceId: 29,
        },
        {
          cityId: 556,
          cityName: "TELUK WONDAMA",
          provinceId: 29,
        },
        {
          cityId: 557,
          cityName: "MANOKWARI",
          provinceId: 29,
        },
        {
          cityId: 558,
          cityName: "PEGUNUNGAN ARFAK",
          provinceId: 29,
        },
        {
          cityId: 559,
          cityName: "MANOKWARI SELATAN",
          provinceId: 29,
        },
        // 29
        // 30
        {
          cityId: 598,
          cityName: "BANDAR LAMPUNG",
          provinceId: 30,
        },
        {
          cityId: 599,
          cityName: "LAMPUNG SELATAN",
          provinceId: 30,
        },
        {
          cityId: 600,
          cityName: "LAMPUNG UTARA",
          provinceId: 30,
        },
        {
          cityId: 601,
          cityName: "METRO",
          provinceId: 30,
        },
        {
          cityId: 603,
          cityName: "LAMPUNG BARAT",
          provinceId: 30,
        },
        {
          cityId: 604,
          cityName: "PESISIR BARAT",
          provinceId: 30,
        },
        {
          cityId: 605,
          cityName: "LAMPUNG TENGAH",
          provinceId: 30,
        },
        {
          cityId: 607,
          cityName: "LAMPUNG TIMUR",
          provinceId: 30,
        },
        {
          cityId: 608,
          cityName: "WAY KANAN",
          provinceId: 30,
        },
        {
          cityId: 609,
          cityName: "TULANG BAWANG",
          provinceId: 30,
        },
        {
          cityId: 610,
          cityName: "MESUJI",
          provinceId: 30,
        },
        {
          cityId: 611,
          cityName: "TULANG BAWANG BARAT",
          provinceId: 30,
        },
        {
          cityId: 615,
          cityName: "PRINGSEWU",
          provinceId: 30,
        },
        {
          cityId: 616,
          cityName: "TANGGAMUS",
          provinceId: 30,
        },
        {
          cityId: 618,
          cityName: "PESAWARAN",
          provinceId: 30,
        },
        // 30
        // 31
        {
          cityId: 626,
          cityName: "TARAKAN",
          provinceId: 31,
        },
        {
          cityId: 627,
          cityName: "BULUNGAN",
          provinceId: 31,
        },
        {
          cityId: 628,
          cityName: "MALINAU",
          provinceId: 31,
        },
        {
          cityId: 629,
          cityName: "NUNUKAN",
          provinceId: 31,
        },
        {
          cityId: 631,
          cityName: "TANA TIDUNG",
          provinceId: 31,
        },
        // 31
        // 32
        {
          cityId: 636,
          cityName: "TERNATE",
          provinceId: 32,
        },
        {
          cityId: 637,
          cityName: "HALMAHERA BARAT",
          provinceId: 32,
        },
        {
          cityId: 639,
          cityName: "HALMAHERA SELATAN",
          provinceId: 32,
        },
        {
          cityId: 640,
          cityName: "HALMAHERA TENGAH",
          provinceId: 32,
        },
        {
          cityId: 641,
          cityName: "HALMAHERA TIMUR",
          provinceId: 32,
        },
        {
          cityId: 642,
          cityName: "HALMAHERA UTARA",
          provinceId: 32,
        },
        {
          cityId: 643,
          cityName: "PULAU MOROTAI",
          provinceId: 32,
        },
        {
          cityId: 644,
          cityName: "KEPULAUAN SULA",
          provinceId: 32,
        },
        {
          cityId: 646,
          cityName: "PULAU TALIABU",
          provinceId: 32,
        },
        {
          cityId: 647,
          cityName: "TIDORE KEPULAUAN",
          provinceId: 32,
        },
        // 32
        // 33
        {
          cityId: 648,
          cityName: "MAKASSAR",
          provinceId: 33,
        },
        {
          cityId: 649,
          cityName: "BANTAENG",
          provinceId: 33,
        },
        {
          cityId: 650,
          cityName: "BARRU",
          provinceId: 33,
        },
        {
          cityId: 651,
          cityName: "BULUKUMBA",
          provinceId: 33,
        },
        {
          cityId: 652,
          cityName: "ENREKANG",
          provinceId: 33,
        },
        {
          cityId: 653,
          cityName: "JENEPONTO",
          provinceId: 33,
        },
        {
          cityId: 654,
          cityName: "TANA TORAJA",
          provinceId: 33,
        },
        {
          cityId: 655,
          cityName: "TORAJA UTARA",
          provinceId: 33,
        },
        {
          cityId: 659,
          cityName: "MAROS",
          provinceId: 33,
        },
        {
          cityId: 663,
          cityName: "PALOPO",
          provinceId: 33,
        },
        {
          cityId: 664,
          cityName: "PINRANG",
          provinceId: 33,
        },
        {
          cityId: 667,
          cityName: "SIDENRENG RAPPANG",
          provinceId: 33,
        },
        {
          cityId: 670,
          cityName: "WAJO",
          provinceId: 33,
        },
        {
          cityId: 671,
          cityName: "SINJAI",
          provinceId: 33,
        },
        {
          cityId: 673,
          cityName: "GOWA",
          provinceId: 33,
        },
        {
          cityId: 674,
          cityName: "TAKALAR",
          provinceId: 33,
        },
        {
          cityId: 676,
          cityName: "BONE",
          provinceId: 33,
        },
        {
          cityId: 678,
          cityName: "SOPPENG",
          provinceId: 33,
        },
        {
          cityId: 679,
          cityName: "KEPULAUAN SELAYAR",
          provinceId: 33,
        },
        {
          cityId: 680,
          cityName: "PANGKAJENE KEPULAUAN",
          provinceId: 33,
        },
        {
          cityId: 683,
          cityName: "PAREPARE",
          provinceId: 33,
        },
        {
          cityId: 684,
          cityName: "LUWU",
          provinceId: 33,
        },
        {
          cityId: 685,
          cityName: "LUWU TIMUR",
          provinceId: 33,
        },
        {
          cityId: 686,
          cityName: "LUWU UTARA",
          provinceId: 33,
        },
        // 33
        // 34
        {
          cityId: 657,
          cityName: "MAMUJU",
          provinceId: 34,
        },
        {
          cityId: 658,
          cityName: "MAMUJU TENGAH",
          provinceId: 34,
        },
        {
          cityId: 662,
          cityName: "MAJENE",
          provinceId: 34,
        },
        {
          cityId: 665,
          cityName: "POLEWALI MANDAR",
          provinceId: 34,
        },
        {
          cityId: 687,
          cityName: "MAMASA",
          provinceId: 34,
        },
        {
          cityId: 688,
          cityName: "MAMUJU UTARA",
          provinceId: 34,
        },
        // 34
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
