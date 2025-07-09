import axios from "../../utils/axiosInstance";

export const login = async (data) => {
  const res = await axios.post(`/users/login`, data);
  return res;
};

export const logout = async () => {
  const res = await axios.post(`/users/logout`);
  return res;
};

export const getDecodedToken = async () => {
  const res = await axios.get(`/users/profile`);
  return res;
};

export const registerUser = async (data) => {
  const res = await axios.post(`/users`, data);
  return res;
};
