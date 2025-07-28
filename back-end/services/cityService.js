const { City } = require("../models");

const getAllCity = async (query) => {
  const filterCities = {};

  if (query.provinceId) {
    filterCities.provinceId = query.provinceId;
  }

  return await City.findAll({
    where: filterCities,
  });
};

module.exports = {
  getAllCity,
};
