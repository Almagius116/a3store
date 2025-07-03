const { OrderItem } = require("../models");

const getAllOrderItem = async () => {
  return await OrderItem.findAll({});
};

const createOrderItem = async (data) => {
  return await OrderItem.create(data);
};

const getOrderItemById = async (id) => {
  return await OrderItem.findByPk(id);
};

const updateOrderItem = async (id, data) => {
  const orderItem = await OrderItem.findByPk(id);
  if (!orderItem) return null;
  await orderItem.update(data);
  return orderItem;
};

const deleteOrderItem = async (id) => {
  const orderItem = await OrderItem.findByPk(id);
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
