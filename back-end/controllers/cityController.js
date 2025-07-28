const cityService = require("../services/cityService");
const sendResponse = require("../utils/sendResponse");

const getAllCity = async (req, res) => {
  try {
    const cities = await cityService.getAllCity(req.query);
    sendResponse(res, 200, true, "Success get all city", { cities });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  getAllCity,
};
