import {
  RecoilRoot,
  useSetRecoilState,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { todoListFilterState } from "./todoListFilterState";
import { todoListState } from "./todoListState";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "show completed":
        return list.filter((item) => item.isComplete);
      case "show uncompleted":
        return list.filter((item) => !item.isComplete);
    }
  },
});
