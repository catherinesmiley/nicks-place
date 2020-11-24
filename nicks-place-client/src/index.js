import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import { menuReducer } from './reducers/rootReducer'

const store = createStore(
    menuReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)