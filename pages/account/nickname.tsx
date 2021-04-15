import { NextPage } from "next";
import Nickname from "../../components/Authentication/Nickname";
import Layout from "../../components/Layout";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRequireLogin } from "../../hooks/useRequireLogin";
const nickname: NextPage = () => {
  //   useRequireLogin();
  const { isAuthChecking, currentUser } = useCurrentUser();
  if (isAuthChecking) {
    return <Layout title="Now Login...">LOGIN</Layout>;
  }
  return <Layout title="setting"><Nickname/></Layout>;
};

export default nickname;
