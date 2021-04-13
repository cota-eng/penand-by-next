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
import Image from "next/image";
import Hero from "../components/Hero";
const ABOUT: NextPage = () => {
  return (
    <>
      <Layout title="About This Site">
        <h2>このサイトについて</h2>
      </Layout>
    </>
  );
};
export default ABOUT;
