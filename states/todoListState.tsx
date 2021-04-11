import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default:[]
})