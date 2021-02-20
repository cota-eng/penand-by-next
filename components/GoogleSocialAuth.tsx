import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";
import googleLogin from "../lib/googleLogin";
import Cookies from "universal-cookie";
// const cookies = new Cookies();
const responseGoogle = async (response) => {
  await googleLogin(response.accessToken);
  console.log(responseGoogle);
  console.log(response);
//   cookies.set("session", response.tokenObj.id_token);
};
// const logout = () => {
//   console.log("logout");
// };
const GoogleSocialAuth = () => {
  return (
    <div>
      <h1>LOGIN WITH GOOGLE</h1>

      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        isSignedIn={false}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        // redirectUri="https://www.google.com"
      />
      {/* <GoogleLogout
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout> */}
    </div>
  );
};

export default GoogleSocialAuth;
