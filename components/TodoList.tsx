import React from 'react'
import { todoListState } from '../states/todoListState'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';


const TodoList: React.FC = () => {
    const todoList = useRecoilValue(todoListState);
    return (
      <>
        {/* <TodoListStats /> */}
        {/* <TodoListFilters /> */}
        <TodoItemCreator />

        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
}

export default TodoList
