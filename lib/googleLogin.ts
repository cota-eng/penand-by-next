import axios from "axios";
// import { useRouter } from "next/router";
import Cookies from "universal-cookie";
// const cookies = new Cookies();
// const router = useRouter();
const googleLogin = async (accesstoken: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/login/`,
    {
      // withCredentials: true,
      access_token: accesstoken,
    }
  );
  return res;
  // console.log(res);
  // console.log("以下status");
  // console.log(res.status);
  // if (res.status === 200) {
  //   localStorage.setItem(
  //     "access_token",
  //     JSON.stringify(res.data.access_token)
  //   );
  //   localStorage.setItem(
  //     "refresh_token",
  //     JSON.stringify(res.data.refresh_token)
  //   );
  //   router.push("/blog-page");
  // } else {
  //   console.log("not 200 OK");
};

export default googleLogin;
