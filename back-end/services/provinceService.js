const { Province } = require("../models");

const getAllProvince = async () => {
  return await Province.findAll({});
};

module.exports = {
  getAllProvince,
};
