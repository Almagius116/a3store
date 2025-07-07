import axios from "../../utils/axiosInstance";

export const profile = async (id) => {
  const res = await axios.get(`/users/${id}`);
  return res;
};

export const editUser = async (id, data) => {
  const res = await axios.patch(`/users/${id}`, data);
  return res;
};
