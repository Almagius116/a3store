import axios from "../../utils/axiosInstance";

export const createShipping = async (data) => {
  const res = await axios.post(`/shipping`, data);
  console.log("res", res);
  return res;
};
