const { Shipping, City, Province } = require("../models");
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
    include: [
      {
        model: City,
        as: "city",
        include: [
          {
            model: Province,
            as: "province",
          },
        ],
      },
    ],
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

const getDistrict = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: { accept: "application/json", key: process.env.KEY_RAJAONGKIR },
    };

    const res = await fetch(
      `https://rajaongkir.komerce.id/api/v1/destination/district/${query.cityId}`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const calculateShippingCost = async (data) => {
  try {
    const { origin, destination, weight, courier, price } = data;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        key: process.env.KEY_RAJAONGKIR,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        origin,
        destination,
        weight,
        courier,
        price,
      }),
    };
    const response = await fetch(
      "https://rajaongkir.komerce.id/api/v1/calculate/district/domestic-cost",
      options
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error("ERROR in calculateShippingCost:", err);
    throw err;
  }
};

module.exports = {
  getAllShipping,
  getShippingById,
  updateShipping,
  deleteShipping,
  createShipping,
  getDistrict,
  calculateShippingCost,
};
