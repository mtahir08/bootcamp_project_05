
const INITIAL_STATE = {
    Data: [],
}

function receiptDetailReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case "SET_DATA": {
            return {
                ...state,
                Data: [...state.Data, action.payload.data.receipt]
            }
        }
       
        default: return state;
    }
}

export { receiptDetailReducer };