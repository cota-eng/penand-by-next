import type { AppProps } from "next/app";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import {
  RecoilRoot,
  useSetRecoilState,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CharacterCounter from "../components/CharacterCounter";
// function AppInit() {
//     const setText = useSetRecoilState(textState);
//     useEffect(() => {

//     },[])
// }

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (router.pathname === "/login") return;
    console.log("common func");
  }, [router.pathname]);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      {/* <AppInit /> */}
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default MyApp;
