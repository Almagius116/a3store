import axios from "../../utils/axiosInstance";

export const createOrder = async (data) => {
  const res = await axios.post(`/orders`, data);
  console.log("res", res);
  return res;
};
