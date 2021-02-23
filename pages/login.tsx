import Layout from "../components/Layout";
import GoogleSocialAuth from "../components/Authentication/GoogleSocialAuth";

const login: React.FC = () => {
  return (
    <Layout title="ログイン">
      <GoogleSocialAuth />
    </Layout>
  );
};

export default login;
