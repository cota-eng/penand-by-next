import Layout from "../components/Layout";
import GoogleSocialAuth from "../components/Authentication/GoogleSocialAuth";
import { useRequireLogin } from "../hooks/useRequireLogin";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserState } from "../states/currentUserState";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
const login: NextPage = () => {
  const router = useRouter();
  useCurrentUser();
  const { isAuthChecking } = useCurrentUser();
  const currentUser = useRecoilValue(currentUserState);
  useEffect(() => {
    if (currentUser) {
      router.back();
      // TODO: how to move to previous page
    }
  }, [currentUser]);
  if (isAuthChecking)
    return (
      <Layout title="now loading">
        <div className="m-auto">
          <ClipLoader color={"blue"} loading={true} size={50} />
        </div>
      </Layout>
    );
  //   if (!currentUser)
  //     return <Layout title="need to login">ログインしていません(spinner)</Layout>;
  return (
    <Layout title="ログイン">
      <section className="mx-auto">
        <h2 className="font-semibold mb-2 mx-auto mt-5 leading-tight text-3xl w-full ">
          ログイン
        </h2>
        <GoogleSocialAuth />
        <p>{currentUser && currentUser.id}</p>
      </section>
    </Layout>
  );
};

export default login;
