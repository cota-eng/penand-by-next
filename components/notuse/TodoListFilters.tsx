import {
  RecoilRoot,
  atom,
  selector,
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useState } from "react";
import { todoListFilterState } from "../states/todoListFilterState";
const TodoListFilters: React.FC = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
    const updateFilter = ({ target: { value } }) => {
        setFilter(value)
    }
    return (
      <>
        <select value={filter}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </>
    );
};

export default TodoListFilters;
