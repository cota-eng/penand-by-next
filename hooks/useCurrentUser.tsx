import {
  useRecoilValue,
} from "recoil";
import { currentUserState } from "../states/currentUserState";

export function useCurrentUser() {
  const currentUser = useRecoilValue(currentUserState);
  const isAuthChecking = currentUser === undefined;
  return {
    isAuthChecking,
    currentUser,
  };
}
