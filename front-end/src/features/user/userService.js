import axios from "../../utils/axiosInstance";

export const profile = async (id) => {
  const res = await axios.get(`/users/${id}`);
  return res;
};
