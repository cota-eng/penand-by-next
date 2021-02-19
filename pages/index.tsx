import GoogleSocialAuth from "../components/GoogleSocialAuth";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout title="home">
      <p className="text-4xl">Hello Next</p>
      <GoogleSocialAuth />
    </Layout>
  );
};
export default Home;
