import Layout from "../components/Layout";
// import Top from "../components/Top";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
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
import News from "../components/News";
import Question from "../components/Question";
import Feature from "../components/Feature";
const Home: NextPage = () => {
  return (
    <>
      <Layout title="トップ | Bista 文房具の専門サイト">
        <Hero />
        <News />
        <Feature />
        <Question />
      </Layout>
    </>
  );
};
export default Home;
