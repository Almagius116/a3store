import axios from "../../utils/axiosInstance";

export const createShipping = async (data) => {
  const res = await axios.post(`/shipping`, data);
  return res;
};

export const getShippingByOrderId = async ({ orderId }) => {
  try {
    const res = await axios.get(`/shipping?orderId=${orderId}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
