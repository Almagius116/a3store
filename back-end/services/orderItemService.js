const { OrderItems } = require("../models");

const getAllOrderItem = async () => {
  return await OrderItems.findAll({});
};

const createOrderItem = async (data) => {
  return await OrderItems.create(data);
};

const getOrderItemById = async (id) => {
  return await OrderItems.findByPk(id);
};

const updateOrderItem = async (id, data) => {
  const orderItem = await OrderItems.findByPk(id);
  if (!orderItem) return null;
  await orderItem.update(data);
  return orderItem;
};

const deleteOrderItem = async (id) => {
  const orderItem = await OrderItems.findByPk(id);
  if (!orderItem) return null;
  await orderItem.destroy();
  return true;
};

module.exports = {
  getAllOrderItem,
  createOrderItem,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};
