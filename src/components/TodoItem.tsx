import * as React from 'react';
import { TodoModel } from '../store/todo/models';
import { actionUpdateTodo } from '../store/todo/actions';


export const TodoItem: React.FC<TodoModel> = props => {
  const { id, text, isCompleted, urgency } = props;

  const toggleCompletedState = () => {
    actionUpdateTodo({
        ...props,
        isCompleted: !props.isCompleted
    })
  };
  return (
    <li>
      <span>
        {id}: {text} : {urgency}
      </span>
      <button type="button" onClick={toggleCompletedState}>
        {isCompleted ? `Reopen` : `Mark as completed`}
      </button>
    </li>
  );
}