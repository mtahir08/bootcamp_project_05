
const INITIAL_STATE = {
    Data: [],
}

function receiptReducer(state = INITIAL_STATE, action) {
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

export { receiptReducer };