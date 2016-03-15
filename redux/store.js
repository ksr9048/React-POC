/**
 * Created by krao on 2/26/2016.
 */

import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

let finalCreateStore = compose(
    applyMiddleware(logger(), thunkMiddleware)
)(createStore)

let configureStore = function(initialState) {
    return finalCreateStore(reducer, initialState)
}

export default configureStore
