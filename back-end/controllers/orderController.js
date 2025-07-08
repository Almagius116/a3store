const orderService = require("../services/orderService");
const sendResponse = require("../utils/sendResponse");

const getAllOrder = async (req, res) => {
  try {
    const orders = await orderService.getAllOrder(req.query);
    sendResponse(res, 200, true, "Success get all order", { orders });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = await orderService.createOrder(req.body);
    sendResponse(res, 201, true, "Success add order", { newOrder });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);

    if (!order) {
      return sendResponse(res, 404, false, "Category not found", null);
    }

    sendResponse(res, 200, true, "Success get order", { order });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const updatedOrder = await orderService.updateOrder(
      req.params.id,
      req.body
    );

    if (!updatedOrder) {
      return sendResponse(res, 404, false, "Order not found", null);
    }

    sendResponse(res, 200, true, "Success update order", updatedOrder);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderService.deleteOrder(req.params.id);

    if (!deletedOrder) {
      return sendResponse(res, 404, false, "Order not found", null);
    }

    sendResponse(res, 200, true, "Success delete order");
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  getAllOrder,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};
