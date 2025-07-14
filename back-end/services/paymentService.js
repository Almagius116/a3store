const { Payment } = require("../models");
const snap = require("../utils/midtrans");
const { updateOrder } = require("./orderService");

const createPayment = async (data) => {
  try {
    const {
      order_id,
      gross_amount,
      payment_type,
      transaction_status,
      transaction_id,
      transaction_time,
    } = data.result;

    const orderId = parseInt(order_id.split("-")[1]);
    const transactionTime = new Date(transaction_time);

    const statusMap = {
      settlement: "success",
      capture: "success",
      pending: "pending",
      deny: "failed",
      cancel: "failed",
      expire: "failed",
    };

    const payment = await Payment.create({
      orderId: orderId,
      midtransOrderId: order_id,
      paymentToken: data.token,
      paymentDate: transactionTime,
      amount: gross_amount,
      method: payment_type,
      status: statusMap[transaction_status] || "pending",
      transactionId: transaction_id,
    });

    return payment;
  } catch (err) {
    throw err;
  }
};

const getAllPayment = async (query) => {
  try {
    const filterPayment = {};
    if (query.orderId != 0) {
      filterPayment.orderId = Number(query.orderId);
    }

    return await Payment.findAll({
      where: filterPayment,
    });
  } catch (err) {
    throw err;
  }
};

const updatePayment = async (id, data) => {
  const payment = await Payment.findByPk(id);
  if (!payment) {
    return null;
  }
  return await payment.update(data);
};

const paymentMidtrans = async (data) => {
  try {
    const { orderId, amount, customerName, customerEmail } = data;

    const count = await Payment.count({
      where: {
        orderId,
      },
    });

    const midtransOrderId = `ORDER-${orderId}-v${count + 1}`;

    const param = {
      transaction_details: {
        order_id: midtransOrderId,
        gross_amount: amount,
      },
      customer_details: {
        first_name: customerName,
        email: customerEmail,
      },
    };

    const payment = await snap.createTransaction(param);
    return payment.token;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const midtransNotification = async (data) => {
  try {
    const {
      order_id,
      transaction_time,
      gross_amount,
      payment_type,
      transaction_status,
    } = data;

    const transactionTime = new Date(transaction_time);

    const statusMap = {
      settlement: "success",
      capture: "success",
      pending: "pending",
      deny: "failed",
      cancel: "failed",
      expire: "failed",
    };

    const payment = await Payment.findOne({
      where: { midtransOrderId: order_id },
    });

    if (!payment) {
      console.log("Payment not found");
    } else {
      await payment.update({
        paymentDate: transactionTime,
        status: statusMap[transaction_status] || "pending",
        method: payment_type,
        amount: gross_amount,
      });
      if (statusMap[transaction_status] === "success") {
        const orderId = payment.orderId;
        const status = "paid";
        await updateOrder(orderId, {
          status: status,
        });
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  paymentMidtrans,
  createPayment,
  midtransNotification,
  getAllPayment,
  updatePayment,
};
