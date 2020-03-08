import { combineReducers } from 'redux';

// export default store;

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { TodoReducer } from './Reducers';
import { authReducer } from './Reducers/authReducer';

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({ TodoReducer, authReducer });
let store = createStore(rootReducer, middleware);

export default store;
