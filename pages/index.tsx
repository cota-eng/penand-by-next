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

import { NextPage } from "next";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Image from "next/image";
const Home: NextPage = () => {
  const { isAuthChecking, currentUser } = useCurrentUser();
  return (
    <>
      <Layout title="home">
        <Top />
        <Image
          src="/vercel.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </Layout>
    </>
  );
};
export default Home;
