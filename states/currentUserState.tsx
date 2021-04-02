import {
  atom,
} from "recoil";
import { CURRENTUSER } from "../types/currentUser";

// undefined is not checked Login User , null is not logined User
export const currentUserState = atom<undefined | null | CURRENTUSER>({
    key: "currentUser",
    default:undefined
})