import { Dispatch, Action } from 'redux'

import { TodoCreateModel, TodoUpdateModel, TodoModel } from './models'
import { TODOS_FETCH, TODOS_FETCH_SUCCESS, TODOS_FETCH_ERROR, TODO_CREATE, TODO_UPDATE, TODO_DELETE, TODO_CREATE_ERROR, TODO_UPDATE_ERROR, TODO_DELETE_ERROR } from './constants'
import { TodosDict } from './types'
import { TodosService } from './services'

export interface IActionTodoCreate extends Action {
    type: typeof TODO_CREATE,
    payload: TodoModel
}

export interface IActionTodoUpdate extends Action {
    type: typeof TODO_UPDATE,
    payload: TodoModel
}

export interface IActionTodoDelete extends Action {
    type: typeof TODO_DELETE,
    todoID: string
}

export interface IActionTodosFetch extends Action {
    type: typeof TODOS_FETCH
}

export interface IActionTodosFetchSuccess extends Action {
    type: typeof TODOS_FETCH_SUCCESS
    todos: TodosDict
}

export interface IActionTodosFetchError extends Action {
    type: typeof TODOS_FETCH_ERROR,
    errorMessage: string
}

export interface IActionTodoCreateError extends Action {
    type: typeof TODO_CREATE_ERROR,
    errorMessage: string
}

export interface IActionTodoUpdateError extends Action {
    type: typeof TODO_UPDATE_ERROR,
    errorMessage: string
}

export interface IActionTodoDeleteError extends Action {
    type: typeof TODO_DELETE_ERROR,
    errorMessage: string
}

export type TodosActions = IActionTodosFetch | IActionTodosFetchSuccess | IActionTodosFetchError | IActionTodoCreate | 
IActionTodoUpdate | IActionTodoDelete | IActionTodoCreateError | IActionTodoUpdateError | IActionTodoDeleteError 

const dispatchFetchTodosProgress = (): IActionTodosFetch => {
    return {
        type: TODOS_FETCH
    }
}

const dispatchFetchTodosSuccess = (todos: TodosDict): IActionTodosFetchSuccess => {
    return {
        type: TODOS_FETCH_SUCCESS,
        todos
    }
}

const dispatchFetchTodosError = (e: Error): IActionTodosFetchError => {
    return {
        type: TODOS_FETCH_ERROR,
        errorMessage: e.message
    }
}

const dispatchCreateTodoError = (e: Error): IActionTodoCreateError => {
    return {
        type: TODO_CREATE_ERROR,
        errorMessage: e.message
    }
}

const dispatchUpdateTodoError = (e: Error): IActionTodoUpdateError => {
    return {
        type: TODO_UPDATE_ERROR,
        errorMessage: e.message
    }
}

const dispatchDeleteTodoError = (e: Error): IActionTodoDeleteError => {
    return {
        type: TODO_DELETE_ERROR,
        errorMessage: e.message
    }
}

const dispatchCreateTodo = (todo: TodoModel): IActionTodoCreate => {
    return {
        type: TODO_CREATE,
        payload: todo
    }
}

const dispatchUpdateTodo = (todo: TodoModel): IActionTodoUpdate => {
    return {
        type: TODO_UPDATE,
        payload: todo
    }
}

const dispatchDeleteTodo = (todoID: string): IActionTodoDelete => {
    return {
        type: TODO_DELETE,
        todoID
    }
}

export const actionFetchTodos = () => {
    return (dispatch: Dispatch) => {
        dispatch(dispatchFetchTodosProgress())
        return TodosService.getAll()
            .then((todos) => {
                return dispatch(dispatchFetchTodosSuccess(todos))
            })
            .catch((e: Error) => {
                return dispatch(dispatchFetchTodosError(e))
            })
    }
}

export const actionCreateTodo = (todo: TodoCreateModel) => {
    return (dispatch: Dispatch) => {
        return TodosService.createTodo(todo)
        .then((response: TodoModel) => {
            return dispatch(dispatchCreateTodo(response))
        })
        .catch((e: Error) => {
            return dispatch(dispatchCreateTodoError(e));
        })
    }
}

export const actionUpdateTodo = (todo: TodoUpdateModel) => {
    return (dispatch: Dispatch) => {
        return TodosService.updateTodo(todo)
        .then((response: TodoModel) => {
            return dispatch(dispatchUpdateTodo(response))
        })
        .catch((e: Error) => {
            return dispatch(dispatchUpdateTodoError(e));
        })
    }
}

export const actionDeleteTodo = (todoID: string) => {
    return (dispatch: Dispatch) => {
        return TodosService.deleteTodo(todoID)
        .then(() => {
            return dispatch(dispatchDeleteTodo(todoID))
        })
        .catch((e: Error) => {
            return dispatch(dispatchDeleteTodoError(e));
        })
    }
}