
const INITIAL_STATE = {
    Data: [],
}

function TodoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'ADD': {
            return {
                ...state,
                Data: [...state.Data, action.payload]
            }
        }
    
        case 'SETDATA': {
            return {
                ...state,
                todos: action.payload
            }
        }
        default: return state;
    }
}

export { TodoReducer };