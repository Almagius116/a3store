const { Order } = require("../models");

const getAllOrder = async () => {
  return await Order.findAll({
    attributes: ["id"],
  });
};

const createOrder = async (data) => {
  return await Order.create(data);
};

const getOrderById = async (id) => {
  return await Order.findByPk(id);
};

const updateOrder = async (id, data) => {
  const order = await Order.findByPk(id);
  if (!order) return null;
  await order.update(data);
  return order;
};

const deleteOrder = async (id) => {
  const order = await Order.findByPk(id);
  if (!order) return null;
  await order.destroy();
  return true;
};

module.exports = {
  getAllOrder,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};
