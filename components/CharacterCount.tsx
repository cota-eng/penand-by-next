import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState } from "../states/textState";

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
const CharacterCount: React.FC = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};

export default CharacterCount;
