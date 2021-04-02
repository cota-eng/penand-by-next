import axios from "axios";
import { fetchTokenRefresh } from "./auth/fetchTokenRefresh";

export const fetchIsVerifiedToken = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/token/verify/`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
    );
    if (res && res.status !== 200) {
        const res_status =  await fetchTokenRefresh()
        if (res_status && res_status !== 200) {
            return null
        }
    }
    return res.status;
};
