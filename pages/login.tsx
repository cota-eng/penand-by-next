import Layout from "../components/Layout";
import GoogleSocialAuth from "../components/Authentication/GoogleSocialAuth";
import { useRequireLogin } from "../hooks/useRequireLogin";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserState } from "../states/currentUserState";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
const login: NextPage = () => {
  const router = useRouter();
  useCurrentUser();
  const { isAuthChecking } = useCurrentUser();
  const currentUser = useRecoilValue(currentUserState);
  useEffect(() => {
    if (currentUser) {
      router.push("/");
      // TODO: how to move to previous page
    }
  }, [currentUser]);
  if (isAuthChecking) return <div>ログイン情報を確認中…</div>;
  //   if (!currentUser)
  //     return <Layout title="need to login">ログインしていません(spinner)</Layout>;
  return (
    <Layout title="ログイン" >
      <GoogleSocialAuth />
      <p>{!currentUser && "未ログインです。"}</p>
      <p>{currentUser && currentUser.id}</p>
    </Layout>
  );
};

export default login;
