import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";
import googleLogin from "../../lib/auth/googleLogin";
import { useState } from "react";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();
import { useRouter } from "next/router";
import useSnackBar from "../../hooks/useSnackBar";
const GoogleSocialAuth: React.FC = () => {
  const { isActive, message, openSnackBar } = useSnackBar();
  const _showSnackbarHandler = (msg: string) => {
    openSnackBar(msg);
  };
  const router = useRouter();
  const responseGoogle = async (response) => {
    const res = await googleLogin(response.accessToken);
    if (res.status === 200) {
      _showSnackbarHandler("完了");
      localStorage.setItem(
        "access_token",
        JSON.stringify(res.data.access_token)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(res.data.refresh_token)
      );
      //   router.back();
      window.location.reload();
    } else {
      _showSnackbarHandler("ログインに失敗しました");
    }
  };
  return (
    <div>
      <GoogleLogin
        className="mx-auto "
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        buttonText="Googleログイン"
        onSuccess={responseGoogle}
        isSignedIn={false}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        // redirectUri="https://www.google.com"
      />
    </div>
  );
};

export default GoogleSocialAuth;
