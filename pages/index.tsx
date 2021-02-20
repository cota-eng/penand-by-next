import GoogleSocialAuth from "../components/GoogleSocialAuth";
import Layout from "../components/Layout";
import ReviewForm from "../components/ReviewForm";
import Top from "../components/Top";

const Home: React.FC = () => {
  return (
    <Layout title="home">
      <Top />
      <GoogleSocialAuth />
      <ReviewForm />
    </Layout>
  );
};
export default Home;
