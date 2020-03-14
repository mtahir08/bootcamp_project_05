import { combineReducers } from 'redux';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { TodoReducer } from './Reducers';
import { authReducer } from './Reducers/authReducer';
import { studentReducer } from './Reducers/studentReducer';
import { AddReceiptReducer } from './Reducers/AddReceiptReducer';

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({ TodoReducer, authReducer, studentReducer, AddReceiptReducer });
let store = createStore(rootReducer, middleware);

export default store;
