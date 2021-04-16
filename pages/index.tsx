import Layout from "../components/Layout";
// import Top from "../components/Top";
import { useEffect, useState } from "react";
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
import News from "../components/News";
const Home: NextPage = () => {
  return (
    <>
      <Layout title="home">
        <Hero />
        <News />
      </Layout>
    </>
  );
};
export default Home;
