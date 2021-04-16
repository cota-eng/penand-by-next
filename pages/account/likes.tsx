import { NextPage } from "next";
import FavProduct from "../../components/Authentication/FavProduct";
import Layout from "../../components/Layout";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRequireLogin } from "../../hooks/useRequireLogin";
import ClipLoader from "react-spinners/ClipLoader";
const favorite: NextPage = () => {
  //   useRequireLogin();
  const { isAuthChecking, currentUser } = useCurrentUser();
  if (isAuthChecking) {
    return (
      <Layout title="Now Login...">
        <ClipLoader />
      </Layout>
    );
  }
  return (
    <Layout title="setting">
      <FavProduct currentUser={currentUser} />
    </Layout>
  );
};
export default favorite;
