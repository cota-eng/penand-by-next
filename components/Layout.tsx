import Head from "next/head";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { loginModalState } from "../states/loginModalState";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import dynamic from "next/dynamic";
const LoginModal = dynamic(() => import("./LoginModal"), {
  ssr: false,
});
interface TITLE {
  title: string;
}
const Layout: React.FC<TITLE> = ({
  children,
  title = "penandへようこそ｜文房具専門のレビューサイト",
}) => {
  const isOpen = useRecoilValue(loginModalState);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <div className="flex justify-center items-center flex-col my-10">
        <NavBar />
      </div>
      <div className="flex min-h-screen">
        {isOpen && <LoginModal />}
        <SideBar />
        <main className=" lg:w-4/5 xl:w-4/5  bg-white  w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
