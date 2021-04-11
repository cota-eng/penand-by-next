import { atom } from "recoil";
export const loginModalState = atom<boolean>({
  key: "loginModal",
  default: false,
});
