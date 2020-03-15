import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { UserReducer } from './Reducers';
import { authReducer } from './Reducers/authReducer';
import { AddReceiptReducer } from './Reducers/AddReceiptReducer';
import { dashboardReducer } from './Reducers/dashboardReducer';
import { receiptReducer } from './Reducers/receiptReducer';
import { receiptDetailReducer } from "./Reducers/receiptDetailReducer"
import { studentReducer } from './Reducers/studentReducer';

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({ UserReducer, authReducer, dashboardReducer, receiptReducer, receiptDetailReducer, studentReducer, AddReceiptReducer });

let store = createStore(rootReducer, middleware);

export default store;
