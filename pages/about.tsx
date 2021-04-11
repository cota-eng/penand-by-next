import Layout from "../components/Layout";
// import Top from "../components/Top";
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
import Hero from "../components/Hero";
const ABOUT: NextPage = () => {
  const { isAuthChecking, currentUser } = useCurrentUser();
  return (
    <>
      <Layout title="ABOUT">
        <Hero />
      </Layout>
    </>
  );
};
export default ABOUT;
