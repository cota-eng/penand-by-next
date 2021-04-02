import axios from "axios";
import { CURRENTUSER } from "../../types/user";

export const fetchCurentUser = async () => {
  const res = await axios.get<CURRENTUSER | null>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/whoami/`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  if (res.status === 200) {
    console.log(res.data[0]);
    return res;
  } else {
    return null;
  }
};
