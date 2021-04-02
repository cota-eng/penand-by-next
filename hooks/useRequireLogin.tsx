import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCurrentUser } from "./useCurrentUser";

export function useRequireLogin() {
  const { isAuthChecking, currentUser } = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    console.log("custom hook");
    if (isAuthChecking) return;
    if (!currentUser) router.push("/login");
  }, [isAuthChecking, currentUser]);
}
