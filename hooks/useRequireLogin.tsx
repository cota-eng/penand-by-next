import { useEffect } from "react";

export function useRequireLogin() {
  useEffect(() => {
    // ここに処理
    console.log("custom hook");
  }, []);
}
