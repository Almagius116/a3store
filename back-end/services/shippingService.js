const { Shipping } = require("../models");

const createShipping = async (data) => {
  const { recipientName, phoneNumber, address, city, provice, postalCode } =
    data;

  return await Shipping.create({
    recipientName,
    phoneNumber,
    address,
    city,
    provice,
    postalCode,
  });
};

const getAllShipping = async () => {
  return await Shipping.findAll();
};

const getShippingById = async (id) => {
  return await Shipping.findByPk(id);
};

const updateShipping = async (id, data) => {
  const shipping = await Shipping.findByPk(id);
  if (!shipping) {
    return null;
  }
  const {
    recipientName,
    phoneNumber,
    address,
    city,
    provice,
    postalCode,
    shippingDate,
    status,
  } = data;
  return await shipping.update({
    recipientName,
    phoneNumber,
    address,
    city,
    provice,
    postalCode,
    shippingDate,
    status,
  });
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
