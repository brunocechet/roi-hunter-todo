import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducers, { AppState } from './store'

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const appStore = createStore(combinedReducers);

// const mapStateToProps = (state: AppState) => ({
//   todo: state.todo
// })

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
