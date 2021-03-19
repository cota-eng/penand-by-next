import Layout from "../components/Layout";
import GoogleSocialAuth from "../components/Authentication/GoogleSocialAuth";
import { useRequireLogin } from "../hooks/useRequireLogin";

const login: React.FC = () => {
  useRequireLogin();
  return (
    <Layout title="ログイン">
      <GoogleSocialAuth />
    </Layout>
  );
};

export default login;
