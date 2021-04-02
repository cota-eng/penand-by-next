import Layout from "../components/Layout";
import Top from "../components/Top";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { textState } from "../states/textState";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
// import CharactorCounter from "../components/CharacterCounter";
// import CharacterCount from "../components/notuse/CharacterCount";
// import TodoList from "../components/TodoList";
import { NextPage } from "next";

import { useCurrentUser } from "../hooks/useCurrentUser";
const Home: NextPage = () => {
  const { isAuthChecking, currentUser } = useCurrentUser();
  if (isAuthChecking) {
    console.log("checking");
  } else {
    console.log("checked");
  }
  if (!currentUser) {
    console.log("not logined");
  } else {
    console.log(currentUser);
  }
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
        {/* <CharactorCounter />
        <CharacterCount />
        <TodoList /> */}
      </Layout>
    </>
  );
};
export default Home;
