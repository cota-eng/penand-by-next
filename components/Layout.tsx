import Head from "next/head";
import { useRecoilValue } from "recoil";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import dynamic from "next/dynamic";
import AnotherModal from "./AnotherModal";
import { CURRENTUSER } from "../types/currentUser";
import ScrollToTop from "./Utils/ScrollToTop";
import LoginModal from "./Authentication/LoginModal";
import MyModal from "./Modal";
import Banner from "./Utils/Banner";
interface Props {
  title: string;
  //   currentUser:CURRENTUSER|null|undefined
}

const Layout: React.FC<Props> = ({
  children,
  title = "Bistaへようこそ｜文房具専門のレビューサイト",
}) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <NavBar />
      <div className="flex  pt-20 flex-col">
        <Banner />
        <div className="flex min-h-screen ">
          <div className="hidden w-0  lg:w-1/5 lg:block ">
            <SideBar />
          </div>
          <main className=" lg:w-4/5   bg-white  w-full">{children}</main>
        </div>
      </div>
      {/* <LoginModal /> */}
      <MyModal />
      <ScrollToTop />
      <Footer />
    </div>
  );
};
export default Layout;
