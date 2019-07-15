import * as React from 'react';
import { TodosDictState } from '../store/todo/types';

interface TodoListProps {
    todos: TodosDictState,
    onDeleteTodo: () => () => void,
    onEditTodo: () => () => void
}


export const TodoList: React.FC<TodoListProps> = props => {

  return (
    <ul>
    </ul>
  );
}