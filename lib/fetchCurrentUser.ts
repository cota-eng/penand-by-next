import axios from "axios";

export const fetchCurentUser = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/token/verify/`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  return res;
};
