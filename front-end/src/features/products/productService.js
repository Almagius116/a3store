import axios from "../../utils/axiosInstance";

export const getAllProducts = async () => {
  const res = await axios.get(`/products`);
  return res.data.data.products;
};

export const getProductById = async (id) => {
  const res = await axios.get(`/products/${id}`);
  return res.data.data.product;
};
