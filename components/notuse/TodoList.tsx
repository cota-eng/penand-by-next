import React from "react";
import { todoListState } from "../states/todoListState";
import { filteredTodoListState } from "../states/filteredTodoListState";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList &&
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
    </div>
  );
};

export default TodoList;
