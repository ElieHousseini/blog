import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

//! Hooking up a thunk to a middlewear store
//! the actions will be sent to thunk then to reducers
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector('#root')
)