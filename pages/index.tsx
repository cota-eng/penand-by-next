import GoogleSocialAuth from "../components/Authentication/GoogleSocialAuth";
import Layout from "../components/Layout";
import Top from "../components/Top";

const Home: React.FC = () => {
  return (
    <Layout title="home">
      <Top />
      <GoogleSocialAuth />
    </Layout>
  );
};
export default Home;
