import {
  RecoilRoot,
  atom,
  selector,
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useState } from "react";
import { todoListStatsState } from "../states/todoListStatsState";

const TodoListStats: React.FC = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
