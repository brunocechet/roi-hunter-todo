import { combineReducers } from 'redux';

import { todosDictReducer } from './todo/reducers'

const rootReducer = combineReducers({
    todo: todosDictReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer