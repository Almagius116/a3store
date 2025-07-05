import axios from "../../utils/axiosInstance";

export const getAllProducts = async ({
  page,
  limit,
  minPrice,
  maxPrice,
  category,
}) => {
  try {
    const res = await axios.get(
      `/products?page=${page}&limit=${limit}&minPrice=${minPrice}&maxPrice=${maxPrice}&categoryId=${category}`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProductById = async (id) => {
  const res = await axios.get(`/products/${id}`);
  return res.data.data.product;
};
