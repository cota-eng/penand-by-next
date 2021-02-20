import axios from "axios";
// import { useRouter } from "next/router";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// const router = useRouter();
const googleLogin = async (accesstoken: string) => {
  try {
    const res = await axios.post(
      "http://localhost:8000/auth/login/",
      {
        withCredentials: true,
        access_token: accesstoken,
      }

      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Methods":
      //         "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      //       "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      //     },
      //   }
    );
    console.log(res);
    // console.log("以下status");
    // console.log(res.status);
    if (res.status === 200) {
      const options = {
        // path: "/",
        // secure: true,
        // httpOnly: true,
        // sameSite: "lax"
      };
      //   cookies.set("access_token", res.data.access_token, options);
      //   cookies.set("refresh_token", res.data.refresh_token, options);
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
