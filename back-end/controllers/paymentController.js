const paymentService = require("../services/paymentService");
const sendResponse = require("../utils/sendResponse");

const getAllPayment = async (req, res) => {
  try {
    console.log("inidia: ", req.query);
    const payment = await paymentService.getAllPayment(req.query);
    sendResponse(res, 201, true, "Success get payment", { payment });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updatePayment = async (req, res) => {
  try {
    const updatedPayment = await paymentService.updatePayment(
      req.params.id,
      req.body
    );

    if (!updatedPayment) {
      return sendResponse(res, 404, false, "Payment not found", null);
    }

    sendResponse(res, 200, true, "Success update payment", updatedPayment);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

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
  getAllPayment,
  updatePayment,
};
