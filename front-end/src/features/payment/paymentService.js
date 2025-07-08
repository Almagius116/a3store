import axios from "../../utils/axiosInstance";

export const midtransPayment = async (data) => {
  const res = await axios.post(`/payments/midtrans`, data);
  return res;
};

export const createPayment = async (data) => {
  const res = await axios.post(`/payments`, data);
  return res;
};
