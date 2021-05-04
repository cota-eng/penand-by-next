import Head from "next/head";
import { useRecoilValue } from "recoil";
import { loginModalState } from "../states/loginModalState";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import dynamic from "next/dynamic";
import AnotherModal from "./AnotherModal";
import { CURRENTUSER } from "../types/currentUser";
import ScrollToTop from "./ScrollToTop";
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
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <NavBar />
      <div className="flex pt-20 min-h-screen ">
        <div className="hidden w-0  lg:w-1/5 lg:block ">
          <SideBar />
        </div>
        <main className=" lg:w-4/5   bg-white  w-full">{children}</main>
      </div>
      <ScrollToTop />
      {isOpen && <LoginModal />}
      <Footer />
      <AnotherModal />
    </div>
  );
};
export default Layout;
