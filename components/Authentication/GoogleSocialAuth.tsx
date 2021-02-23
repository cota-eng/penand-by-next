import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";
import googleLogin from "../../lib/googleLogin";
import Cookies from "universal-cookie";
// const cookies = new Cookies();
const responseGoogle = async (response) => {
  await googleLogin(response.accessToken);
  console.log(responseGoogle);
  console.log(response);
};
const GoogleSocialAuth: React.FC = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold mb-2 mx-auto mt-5 leading-tight text-3xl w-full text-gray-500">
          グーグルアカウントでログインする
        </h2>

        <GoogleLogin
          className="mx-auto "
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
    </div>
  );
};

export default GoogleSocialAuth;
