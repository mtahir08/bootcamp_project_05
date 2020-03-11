import { createStore } from 'redux';

import { TodoReducer } from './Reducers';

let store = createStore(TodoReducer);


export default store;