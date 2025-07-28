import axios from "../../utils/axiosInstance";

export const getAllProvince = async () => {
  try {
    const res = await axios.get(`/provinces`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
