import axios from "../../utils/axiosInstance";

export const getAllCity = async ({ provinceId }) => {
  try {
    const res = await axios.get(`/cities?provinceId=${provinceId}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
