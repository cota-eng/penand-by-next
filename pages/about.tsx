import Layout from "../components/Layout";
// import Top from "../components/Top";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { NextPage } from "next";
import Image from "next/image";
import Hero from "../components/Top/Hero";
import { BREADCRUMB } from "../types/breadcrumb";
import Breadcrumb from "../components/Breadcrumb";
const ABOUT: NextPage = () => {
  const breads: BREADCRUMB[] = [
    {
      name: "about",
      slug: "/about",
    },
  ];
  return (
    <>
      <Layout title="About This Site">
        <Breadcrumb breads={breads} />
        <h2>このサイトについて</h2>
      </Layout>
    </>
  );
};
export default ABOUT;
