import Layout from "../components/Layout";
import GoogleSocialAuth from "../components/Authentication/GoogleSocialAuth";
import { useRequireLogin } from "../hooks/useRequireLogin";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserState } from "../states/currentUserState";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { NextPage } from "next";

const login: NextPage = () => {
  //   useRequireLogin();
  useCurrentUser();
  const { isAuthChecking } = useCurrentUser();
  const currentUser = useRecoilValue(currentUserState);
  //   if (currentUser) {
  //     console.log(currentUser["id"]);
  //   }
  if (isAuthChecking) return <div>ログイン情報を確認中…</div>;
  //   if (!currentUser)
  //     return <Layout title="need to login">ログインしていません(spinner)</Layout>;
  return (
    <Layout title="ログイン">
      <GoogleSocialAuth />
      <p>{!currentUser && "no user"}</p>
      <p>{currentUser && currentUser.id}</p>
    </Layout>
  );
};

export default login;
