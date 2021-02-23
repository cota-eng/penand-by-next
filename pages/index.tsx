import Layout from "../components/Layout";
import Top from "../components/Top";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";

const Home: React.FC = () => {
  //   useEffect(() => {
  //     const { pathname } = Router;
  //     if (pathname == "/") {
  //       Router.push("/pen");
  //     }
  //   });
  return (
    <>
      <Layout title="home">
        <Top />
      </Layout>
    </>
  );
};
export default Home;
