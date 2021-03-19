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
import CharactorCounter from "../components/CharacterCounter";
import CharacterCount from "../components/CharacterCount";
import TodoList from "../components/TodoList";
const Home: React.FC = () => {
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
        <CharactorCounter />
        <CharacterCount />
        <TodoList />
      </Layout>
    </>
  );
};
export default Home;
