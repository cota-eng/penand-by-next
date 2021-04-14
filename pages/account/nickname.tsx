import { NextPage } from "next";
import Nickname from "../../components/Authentication/Nickname";
import Layout from "../../components/Layout";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRequireLogin } from "../../hooks/useRequireLogin";
import ClipLoader from "react-spinners/ClipLoader";

const nickname: NextPage = () => {
  //   useRequireLogin();
  const { isAuthChecking, currentUser } = useCurrentUser();
  if (!isAuthChecking) {
    return (
      <Layout title="Now Login...">
        <ClipLoader />
      </Layout>
    );
  }
  return (
    <Layout title="setting">
      <Nickname currentUser={currentUser} />
    </Layout>
  );
};

export default nickname;
