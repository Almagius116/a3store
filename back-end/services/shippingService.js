const { Shipping } = require("../models");

const createShipping = async (data) => {
  return await Shipping.create(data);
};

const getAllShipping = async (query) => {
  const filterShipping = {};
  if (query.orderId != 0) {
    filterShipping.orderId = Number(query.orderId);
  }

  return await Shipping.findAll({
    where: filterShipping,
  });
};

const getShippingById = async (id) => {
  return await Shipping.findByPk(id);
};

const updateShipping = async (id, data) => {
  const shipping = await Shipping.findByPk(id);
  if (!shipping) {
    return null;
  }
  return await shipping.update(data);
};

const deleteShipping = async (id, data) => {
  const shipping = await Shipping.findByPk(id);
  if (!shipping) {
    return null;
  }
  await shipping.destroy();
  return true;
};

module.exports = {
  getAllShipping,
  getShippingById,
  updateShipping,
  deleteShipping,
  createShipping,
};
