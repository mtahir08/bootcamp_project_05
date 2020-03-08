import { combineReducers } from 'redux';

// import { TodoReducer } from './Reducers';

// let store = createStore(TodoReducer);

import { Dash } from './Reducers/Dash';


// export default store;

import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

import { TodoReducer } from './Reducers';

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers(TodoReducer, Dash)
let store = createStore(rootReducer, middleware);

export default store;