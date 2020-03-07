import { createStore } from 'redux';

import { Dash } from './Reducers/Dash';

let store = createStore(Dash);


// store.subscribe(() => {
//     console.log("subscribe start")
//     console.log(store.getState())
//     console.log("subscribe end")
// })

export default store;