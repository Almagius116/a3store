import axios from "../../utils/axiosInstance";

export const midtransPayment = async (data) => {
  const res = await axios.post(`/payments/midtrans`, data);
  return res;
};

export const createPayment = async (data) => {
  const res = await axios.post(`/payments`, data);
  return res;
};

export const getPaymentByOrderId = async ({ orderId }) => {
  const res = await axios.get(`/payments?orderId=${orderId}`);
  return res;
};

export const updatePayment = async (id, data) => {
  const res = await axios.patch(`/payments/${id}`, data);
  return res;
};
