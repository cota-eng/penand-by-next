import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface TITLE {
  title: string;
}
const Layout: React.FC<TITLE> = ({
  children,
  title = "penandへようこそ｜文房具専門のレビューサイト",
}) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <NavBar />

      {/* <main className="flex flex-1 justify-center items-center w-screen"> */}
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
