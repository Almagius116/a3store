import axios from "../../utils/axiosInstance";

export const createOrder = async (data) => {
  const res = await axios.post(`/orders`, data);
  return res;
};

export const getOrderById = async (id) => {
  const res = await axios.get(`/orders/${id}`);
  return res.data.data.order;
};

export const getAllOrders = async ({ userId, status }) => {
  try {
    const res = await axios.get(`/orders?userId=${userId}&status=${status}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateOrder = async (id, data) => {
  try {
    const res = await axios.patch(`/orders/${id}`, data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
