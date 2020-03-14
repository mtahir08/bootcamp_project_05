import { combineReducers } from 'redux';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { TodoReducer } from './Reducers';
import { authReducer } from './Reducers/authReducer';
import { receiptReducer } from './Reducers/receiptReducer';
import { receiptDetailReducer } from "./Reducers/receiptDetailReducer"
import { studentReducer } from './Reducers/studentReducer';

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({ TodoReducer, authReducer, receiptReducer, receiptDetailReducer, studentReducer });

let store = createStore(rootReducer, middleware);

export default store;
