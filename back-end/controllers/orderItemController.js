const orderItemService = require("../services/orderItemService");
const sendResponse = require("../utils/sendResponse");

const getAllOrderItem = async (req, res) => {
  try {
    const orderItems = await orderItemService.getAllOrderItem();
    sendResponse(res, 200, true, "Success get all order item", { orderItems });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const createOrderItem = async (req, res) => {
  try {
    const newOrderItem = await orderItemService.createOrderItem(req.body);
    sendResponse(res, 201, true, "Success add order item", { newOrderItem });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getOrderItemById = async (req, res) => {
  try {
    const orderItem = await orderItemService.getOrderItemById(req.params.id);

    if (!orderItem) {
      return sendResponse(res, 404, false, "Order item not found", null);
    }

    sendResponse(res, 200, true, "Success get order item", { orderItem });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updateOrderItem = async (req, res) => {
  try {
    const updatedOrderItem = await orderItemService.updateOrderItem(
      req.params.id,
      req.body
    );

    if (!updatedOrderItem) {
      return sendResponse(res, 404, false, "Order item not found", null);
    }

    sendResponse(res, 200, true, "Success update order item", updatedOrderItem);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const deleteOrderItem = async (req, res) => {
  try {
    const deletedOrderItem = await orderItemService.deleteOrderItem(
      req.params.id
    );

    if (!deletedOrderItem) {
      return sendResponse(res, 404, false, "Order item not found", null);
    }

    sendResponse(res, 200, true, "Success delete order item");
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  getAllOrderItem,
  createOrderItem,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};
