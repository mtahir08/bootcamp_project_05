// import { createStore } from 'redux';

// import { TodoReducer } from './Reducers';

// let store = createStore(TodoReducer);


// // store.subscribe(() => {
// //     console.log("subscribe start")
// //     console.log(store.getState())
// //     console.log("subscribe end")
// // })

// export default store;

import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

import { TodoReducer } from './Reducers';

const middleware = applyMiddleware(thunk);
let store = createStore(TodoReducer, middleware);

export default store;