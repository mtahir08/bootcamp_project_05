import { combineReducers } from 'redux';

// export default store;

import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

import { TodoReducer } from './Reducers';

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers(TodoReducer)
let store = createStore(rootReducer, middleware);

export default store;