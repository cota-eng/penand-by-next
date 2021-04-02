import { NextPage } from "next";
import Layout from "../../components/Layout";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRequireLogin } from "../../hooks/useRequireLogin";
const setting: NextPage = () => {
  //   useRequireLogin();
  const { isAuthChecking, currentUser } = useCurrentUser();
  if (isAuthChecking) {
    return <Layout title="Now Login...">LOGIN</Layout>;
  }
  return <Layout title="setting">setting</Layout>;
};

export default setting;
