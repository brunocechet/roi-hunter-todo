import { TODOS_FETCH_SUCCESS, TODO_CREATE, TODO_UPDATE, TODO_DELETE, TODOS_FETCH_ERROR } from "./constants";
import { TodosDict } from "./types";
import { TodosActions } from "./actions";

export type TodosDictState = {
  byId: TodosDict,
  allIds: string[]
}

export const todosDictReducer = (state: TodosDictState, action: TodosActions): TodosDictState => {
  switch (action.type) {
    case TODOS_FETCH_SUCCESS:
      return {
        byId: action.todos,
        allIds: Object.keys(action.todos)
      }
    case TODOS_FETCH_ERROR:
      return {
        byId: {},
        allIds: []
      }
    case TODO_CREATE:
      return {
        byId: {
          [action.payload.id]: action.payload,
          ...state.byId
        },
        allIds: Object.keys({
          [action.payload.id]: action.payload,
          ...state.byId
        })
      }
    case TODO_UPDATE:
      return {
        byId: {
          [action.payload.id]: action.payload,
          ...state.byId
        },
        allIds: state.allIds
      }
    case TODO_DELETE:
      let byId = Object.assign({}, state.byId);
      delete byId[action.todoID];
      const allIds = Object.assign({}, state.allIds.filter(id => id !== action.todoID));

      return {
        byId,
        allIds
      }
  
    default:
      return state;
  }
}