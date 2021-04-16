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
        <div className="flex justify-center h-full">
          <div className="m-auto">
            <ClipLoader size={100} />
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout title="setting">
      <div className="flex justify-center h-full">
        <div className="m-auto">
          <Nickname currentUser={currentUser} />
        </div>
      </div>
    </Layout>
  );

};
export default nickname;
