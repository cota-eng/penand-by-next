import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "tailwindcss/tailwind.css";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { currentUserState } from "../states/currentUserState";
import { fetchCurentUser } from "../lib/auth/fetchCurrentUser";
import { CURRENTUSER } from "../types/currentUser";
function AppInit() {
  const setCurrentUser = useSetRecoilState(currentUserState);
  useEffect(() => {
    (async function () {
      try {
        const currentUser = await fetchCurentUser();
        setCurrentUser(currentUser);
      } catch {
        setCurrentUser(null);
      }
    })();
  }, []);
  return null;
}
function MyApp({ Component, pageProps, router }: AppProps) {
  //   useEffect(() => {
  //     // if (router.pathname === "/login") return;
  //   }, [router.pathname]);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <AppInit />
    </RecoilRoot>
  );
}
export default MyApp;
