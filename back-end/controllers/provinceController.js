const provinceService = require("../services/provinceService");
const sendResponse = require("../utils/sendResponse");

const getAllProvince = async (req, res) => {
  try {
    const provinces = await provinceService.getAllProvince();
    sendResponse(res, 200, true, "Success get all category", { provinces });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  getAllProvince,
};
