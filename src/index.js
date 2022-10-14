import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from "./reducers/reducers";

// Hooking Redux Dev Tools browser extension support with code
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)