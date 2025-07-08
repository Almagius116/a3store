const shippingService = require("../services/shippingService");
const sendResponse = require("../utils/sendResponse");

const getAllShipping = async (req, res) => {
  try {
    const shipping = await shippingService.getAllShipping(req.query);
    sendResponse(res, 200, true, "Success get all shipping", { shipping });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const createShipping = async (req, res) => {
  try {
    console.log(req.body);
    const newShipping = await shippingService.createShipping(req.body);
    sendResponse(res, 201, true, "Success add shipping", { newShipping });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  createShipping,
  getAllShipping,
};
