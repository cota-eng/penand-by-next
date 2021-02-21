import axios from "axios";
// import { useRouter } from "next/router";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// const router = useRouter();
const googleLogin = async (accesstoken: string) => {
  try {
    const res = await axios.post("http://localhost:8000/api/login/", {
      withCredentials: true,
      access_token: accesstoken,
    });
    console.log(res);
    // console.log("以下status");
    // console.log(res.status);
    if (res.status === 200) {
      localStorage.setItem(
        "access_token",
        JSON.stringify(res.data.access_token)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(res.data.refresh_token)
      );
      //   router.push("/blog-page");
    } else {
      console.log("not 200");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default googleLogin;
