import { NextPage } from "next";
import FavProduct from "../../components/Authentication/FavProduct";
import Layout from "../../components/Layout";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRequireLogin } from "../../hooks/useRequireLogin";
const favorite: NextPage = () => {
  //   useRequireLogin();
  const { isAuthChecking, currentUser } = useCurrentUser();
  if (isAuthChecking) {
    return <Layout title="Now Login...">LOGIN</Layout>;
  }
  return (
    <Layout title="setting">
      <FavProduct />
    </Layout>
  );
};

export default favorite;
