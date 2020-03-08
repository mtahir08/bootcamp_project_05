
const INITIAL_STATE = {
    Data: [],
}

function TodoReducer(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {

        case 'ADD': {
            return {
                ...state,
                Data: [...state.Data, action.payload]
            }
        }

        default: return state;
    }
}

export { TodoReducer };