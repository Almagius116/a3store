const { Order, OrderItem, User, Product, sequelize } = require("../models");

const getAllOrder = async (query) => {
  const filterOrders = {};

  if (query.userId != 0) {
    filterOrders.userId = Number(query.userId);
  }

  return await Order.findAll({
    where: filterOrders,
    include: [
      {
        model: OrderItem,
        as: "orderItem",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
  });
};

const createOrder = async (data) => {
  try {
    const { userId, items, totalPrice } = data;

    const transaction = await sequelize.transaction();

    const newOrder = await Order.create(
      { userId, totalPrice },
      { transaction: transaction }
    );

    const orderItemsPayload = items.map((item) => ({
      orderId: newOrder.id,
      productId: item.productId,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
    }));

    await OrderItem.bulkCreate(orderItemsPayload, { transaction: transaction });
    await transaction.commit();

    return newOrder;
  } catch (err) {
    await transaction.rollback();
    console.log(err);
    return null;
  }
};

const getOrderById = async (id) => {
  const order = await Order.findByPk(id, {
    include: [
      {
        model: User,
        as: "user",
      },
      {
        model: OrderItem,
        as: "orderItem",
        include: [
          {
            model: Product,
            as: "product",
          },
        ],
      },
    ],
  });
  if (!order) return null;
  return order;
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
