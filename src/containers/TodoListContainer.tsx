import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { TodosDictState } from '../store/todo/types';
import { actionFetchTodos } from '../store/todo/actions';

interface TodoListContainerProps {
    fetchTodos: () => () => void,
    todos: TodosDictState[]
}

interface TodoListContainerState {
}

class TodoListContainer extends React.Component<TodoListContainerProps, TodoListContainerState> {
    // constructor(props: TodoListContainerProps, state: TodoListContainerState) {
    //     super(props, state);
    // }
    componentDidMount() {
        this.props.fetchTodos()
    }

    render() {
        return ();
    }

}

const mapStateToProps = (state: AppState) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchTodos: () => dispatch(actionFetchTodos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);