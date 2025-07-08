const shippingService = require("../services/shippingService");
const sendResponse = require("../utils/sendResponse");

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
};
