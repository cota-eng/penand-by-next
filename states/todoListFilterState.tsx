import {
  RecoilRoot,
  useSetRecoilState,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "show all",
});
