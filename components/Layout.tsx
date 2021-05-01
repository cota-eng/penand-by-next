import Head from "next/head";
import { useRecoilValue } from "recoil";
import { loginModalState } from "../states/loginModalState";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import dynamic from "next/dynamic";
import { CURRENTUSER } from "../types/currentUser";
const LoginModal = dynamic(() => import("./LoginModal"), {
  ssr: false,
});
interface Props {
  title: string;
  //   currentUser:CURRENTUSER|null|undefined
}
const Layout: React.FC<Props> = ({
  children,
  title = "Bistaへようこそ｜文房具専門のレビューサイト",
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
      <NavBar />
      <div className="flex min-h-screen ">
        <div className="hidden lg:w-1/5 lg:block ">
          {/* {isOpen && <LoginModal />} */}
          <SideBar />
        </div>
        <main className=" lg:w-4/5 xl:w-4/5  bg-white  w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
