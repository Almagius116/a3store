const paymentService = require("../services/paymentService");
const sendResponse = require("../utils/sendResponse");

const createPayment = async (req, res) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    sendResponse(res, 201, true, "Success add payment", { payment });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const paymentMidtrans = async (req, res) => {
  try {
    const paymentToken = await paymentService.paymentMidtrans(req.body);
    sendResponse(res, 201, true, "Success midtrans payment", { paymentToken });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const midtransNotification = async (req, res) => {
  try {
    await paymentService.midtransNotification(req.body);
    sendResponse(res, 201, true, "Success handle midtrans notification");
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  createPayment,
  paymentMidtrans,
  midtransNotification,
};
