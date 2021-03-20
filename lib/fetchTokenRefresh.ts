import axios from "axios";

export const fetchTokenRefresh = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/token/refresh/`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
      },
    }
  );
  return res.status;
};
