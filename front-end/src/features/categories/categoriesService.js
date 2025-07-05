import axios from "../../utils/axiosInstance";

export const getAllCategory = async () => {
  try {
    const res = await axios.get(`/categories`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
