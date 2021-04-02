import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface TITLE {
  title: string;
}
const Layout: React.FC<TITLE> = ({
  children,
  title = "penandへようこそ｜文房具専門のレビューサイト",
}) => {
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
        <SideBar/>
        <main className="w-full px-10  lg:w-4/5 xl:w-4/5  bg-gray-200  w-screen">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
