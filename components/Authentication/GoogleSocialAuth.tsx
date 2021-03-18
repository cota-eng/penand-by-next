import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";
import googleLogin from "../../lib/googleLogin";
import { useState } from "react";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();

const GoogleSocialAuth: React.FC = () => {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const responseGoogle = async (response) => {
    const res = await googleLogin(response.accessToken);
    if (res.status === 200) {
      console.log("a");
      console.log(res);
      setError(true);
    }
    //   console.log(responseGoogle);
    //   console.log(response);
  };
  return (
    <div>
      <div>
        {error && (
          <p>
            <svg
              className="animate-bounce w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </p>
        )}
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
